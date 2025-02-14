import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

async function verifyJwtToken(token: string) {
  try {
    const verifiedToken = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET_KEY)
    );

    return verifiedToken.payload;
  } catch (error) {
    console.error(error);
  }
}

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const verifiedToken = await verifyJwtToken(accessToken!);

  if (!accessToken || !verifiedToken) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // const pathname = request.nextUrl.pathname;
  const { pathname } = request.nextUrl;
  const role = verifiedToken.role;

  if (
    (pathname.startsWith("/dashboard/author") && role === "AUTHOR") ||
    (pathname.startsWith("/dashboard/reader") && role === "READER")
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/dashboard")) {
    if (role === "AUTHOR")
      return NextResponse.redirect(new URL("/dashboard/author", request.url));
    if (role === "READER")
      return NextResponse.redirect(new URL("/dashboard/reader", request.url));
  }

  return NextResponse.redirect(new URL("/not-found", request.url));
}

export const config = {
  matcher: ["/dashboard/:path*", "/about", "/blog"],
};
