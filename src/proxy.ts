import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const getSecret = () =>
  new TextEncoder().encode(
    process.env.JWT_SECRET || "petrotank-fallback-secret-change-in-prod-2026"
  );

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin-ptk-2026")) {
    const token = request.cookies.get("ptk-admin-session")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      await jwtVerify(token, getSecret());
      return NextResponse.next();
    } catch {
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("ptk-admin-session");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-ptk-2026/:path*"],
};
