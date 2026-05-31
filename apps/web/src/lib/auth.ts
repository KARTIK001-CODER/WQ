import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from './jwt';
import { connectToDatabase } from './db';
import User from '@/models/User';

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token) {
      return null;
    }

    const decoded = verifyToken(token);
    if (!decoded || !decoded.userId) {
      return null;
    }

    await connectToDatabase();
    const user = await User.findById(decoded.userId).select('-password');
    return user;
  } catch (error) {
    console.error('Error in getCurrentUser helper:', error);
    return null;
  }
}
