import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import User from '@/models/User';
import { registerSchema } from '@/validators/auth';
import { signToken } from '@/lib/jwt';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Zod input validation
    const validation = registerSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: 'Validation failed', errors: validation.error.format() },
        { status: 400 }
      );
    }

    const { name, email, password, role } = validation.data;

    // 2. Reject admin role signup explicitly
    if ((body.role as string)?.toLowerCase() === 'admin') {
      return NextResponse.json(
        { message: 'Unauthorized role assignment. Admin registration is prohibited.' },
        { status: 403 }
      );
    }

    await connectToDatabase();

    // 3. Check for duplicate email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'A user with this email address already exists' },
        { status: 409 }
      );
    }

    // 4. Create new user (pre-save hook hashes password)
    const newUser = await User.create({
      name,
      email,
      password,
      role,
    });

    // 5. Generate JWT token
    const token = signToken({
      userId: newUser._id.toString(),
      email: newUser.email,
      role: newUser.role,
    });

    // 6. Return safe user object and set HTTP-only cookie
    const safeUser = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      avatar: newUser.avatar,
      isVerified: newUser.isVerified,
      createdAt: newUser.createdAt,
    };

    const response = NextResponse.json(
      { message: 'Registration successful', user: safeUser },
      { status: 201 }
    );

    // Set secure cookie
    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error: any) {
    console.error('Error during registration:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred during registration' },
      { status: 500 }
    );
  }
}
