import { NextResponse } from 'next/server';
import { basePath } from './lib/locale-path';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const path = basePath(pathname);
  const tamil = path !== pathname;
  const headers = new Headers(request.headers);
  // The URL, never an incoming header or preference cookie, determines indexable content.
  headers.set('x-clinic-language', tamil ? 'ta' : 'en');
  if (tamil && /^\/(api|_next|images|fonts|og)(\/|$)/.test(path)) return NextResponse.next({ request: { headers } });
  if (!tamil) return NextResponse.next({ request: { headers } });
  const url = new URL(request.url);
  url.pathname = path;
  return NextResponse.rewrite(url, { request: { headers } });
}

export const config = {
  matcher: ['/((?!api(?:/|$)|_next/|images/|fonts/|og(?:/|$)|.*\\.[^/]+$).*)'],
};
