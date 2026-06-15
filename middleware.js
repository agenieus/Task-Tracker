import { NextResponse } from 'next/server';

export function middleware(request) {
  const isLoggedIn = request.cookies.get('isLoggedIn')?.value === 'true';
  /**
   * @param {string} pathname
   */

  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('tasks/new') && !isLoggedIn) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', params);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/tasks/new', '/tasks/new/:path*'],
};
