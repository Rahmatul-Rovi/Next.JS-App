import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const dummyUserData = {
    role: "user", 
    email: "test@user.com"
  }

  const { pathname } = request.nextUrl;
  const isAdmin = dummyUserData.role === 'admin';

  if (pathname.startsWith("/services") && !isAdmin) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/services/:path*'], 
}