import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { connectToDatabase } from '@/lib/db';
import User from '@/models/User';
import { signToken } from '@/lib/jwt';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');
    const state = searchParams.get('state');

    const cookieState = req.cookies.get('oauth_state')?.value;

    // 1. Verify CSRF state parameter
    if (!state || !cookieState || state !== cookieState) {
      return NextResponse.json(
        { message: 'Invalid request. Cross-site Request Forgery detected.' },
        { status: 400 }
      );
    }

    if (!code) {
      return NextResponse.json(
        { message: 'Authorization code missing from Google redirect callback.' },
        { status: 400 }
      );
    }

    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const redirectUri = `${appUrl}/api/auth/google/callback`;

    if (!clientId || !clientSecret) {
      console.error('OAuth parameters missing in environment configuration.');
      return NextResponse.json(
        { message: 'OAuth configuration error' },
        { status: 500 }
      );
    }

    // 2. Exchange Authorization Code for Access & ID tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('Error exchanging token:', tokenData);
      return NextResponse.json(
        { message: 'Failed to exchange authorization token with Google' },
        { status: 400 }
      );
    }

    const { access_token } = tokenData;

    // 3. Fetch User Profile Info using Google access token
    const userProfileResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const profileData = await userProfileResponse.json();

    if (!userProfileResponse.ok) {
      console.error('Error fetching user profile:', profileData);
      return NextResponse.json(
        { message: 'Failed to retrieve user profile information from Google' },
        { status: 400 }
      );
    }

    const { name, email, picture } = profileData;

    if (!email) {
      return NextResponse.json(
        { message: 'Email address not provided by Google account.' },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // 4. Check if User exists. If not, register new student.
    let user = await User.findOne({ email });

    if (!user) {
      // Create cryptographically secure random password (never used for login since oauth is passwordless)
      const randomPassword = crypto.randomBytes(32).toString('hex');

      user = await User.create({
        name,
        email,
        password: randomPassword, // pre-save hook handles hashing
        role: 'student',
        avatar: picture || '',
        isVerified: true, // Google accounts are verified
      });
    }

    // 5. Sign JWT session token
    const token = signToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    // 6. Set HTTP-only Cookie and redirect to Dashboard
    const redirectUrl = new URL('/dashboard', req.url);
    const response = NextResponse.redirect(redirectUrl.toString());

    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    // Clean up CSRF state cookie
    response.cookies.delete('oauth_state');

    return response;
  } catch (error) {
    console.error('Error in Google callback handler:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred during Google Sign In' },
      { status: 500 }
    );
  }
}
