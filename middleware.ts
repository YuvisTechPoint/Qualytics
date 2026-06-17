import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/studio")) {
    const authHeader = request.headers.get("authorization");
    const user = process.env.STUDIO_AUTH_USER;
    const pass = process.env.STUDIO_AUTH_PASSWORD;

    if (user && pass) {
      const expected = `Basic ${Buffer.from(`${user}:${pass}`).toString("base64")}`;
      if (authHeader !== expected) {
        return new NextResponse("Authentication required", {
          status: 401,
          headers: { "WWW-Authenticate": 'Basic realm="Qualytics Studio"' },
        });
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio/:path*"],
};
