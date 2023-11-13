import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // if (request.nextUrl.pathname.startsWith("/dashboard")) {
  //   //! JIKA URL DI /DASHBOARD MAKA DIA AKAN OTOMATIS DI REDIRECT KE "/"
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  const isLogin = false;
  if (!isLogin) {
    // ini contoh untuk matcher
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more

//! MATCHER UNTUK MEM FILTER YANG MANA SAJA YANG PAKE MIDDLEWARE PAKE INI DARI PADA YANG ATAS
export const config = {
  // matcher: "/product/:path*", //! ini tunggal, bisa banyak jadi pake array sahja

  matcher: ["/product/:path*", "/dashboard/:path*"],
};
