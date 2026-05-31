import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Match only routes that need authentication protection
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/courses/:path*',
    '/learn/:path*',
    '/ai/:path*',
  ],
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;

  // If no auth token is present, redirect to the login page
  if (!token) {
    const loginUrl = new URL('/login', request.url);
    // Persist path they tried to access to redirect them back after logging in
    loginUrl.searchParams.set('redirectTo', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Allow the request to proceed if token exists
  return NextResponse.next();
}
