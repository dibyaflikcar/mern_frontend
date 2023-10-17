import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
  const userToken = localStorage.getItem('token');
  if(!userToken) {
     return NextResponse.redirect(new URL('/signin',request.url))
  }
  // else {
  //  return NextResponse.redirect(new URL('/desired-route', request.url))
  // }
}
export const config = {
  matcher: '/dashboard',
}