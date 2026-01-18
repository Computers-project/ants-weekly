import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const session = req.cookies.get("admin_session")?.value;
  const session_user = req.cookies.get("session")?.value;

  if (!session && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!session_user && req.nextUrl.pathname.startsWith("/user")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
