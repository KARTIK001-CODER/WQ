import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET(req: NextRequest) {
  try {
    const googleClientId = process.env.GOOGLE_CLIENT_ID;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    if (!googleClientId) {
      console.error('Missing GOOGLE_CLIENT_ID env variable.');
      return NextResponse.json(
        { message: 'OAuth is misconfigured. Missing Google Client ID.' },
        { status: 500 }
      );
    }

    // 1. Generate CSRF state token
    const state = crypto.randomBytes(32).toString('hex');

    // 2. Build redirect URI (must match URI in Google Cloud Console Credentials)
    const redirectUri = `${appUrl}/api/auth/google/callback`;

    // 3. Build Google Auth URL
    const googleAuthUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
    googleAuthUrl.searchParams.set('client_id', googleClientId);
    googleAuthUrl.searchParams.set('redirect_uri', redirectUri);
    googleAuthUrl.searchParams.set('response_type', 'code');
    googleAuthUrl.searchParams.set('scope', 'openid email profile');
    googleAuthUrl.searchParams.set('state', state);
    googleAuthUrl.searchParams.set('access_type', 'offline');
    googleAuthUrl.searchParams.set('prompt', 'consent');

    const response = NextResponse.redirect(googleAuthUrl.toString());

    // 4. Store state in HTTP-only cookie for verification in callback route
    response.cookies.set('oauth_state', state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 10, // 10 minutes expiry
    });

    return response;
  } catch (error) {
    console.error('Error initiating Google Auth:', error);
    return NextResponse.json(
      { message: 'Failed to initialize sign-in with Google' },
      { status: 500 }
    );
  }
}
