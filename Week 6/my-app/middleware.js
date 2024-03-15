import { NextResponse } from "next/server";
export function middleware(request) {
  // console.log("requested: ", req.url);x

  // Approach 2 : using "conditional" logic on request's nextUrl properties: pathname, basePath, ...
  if (request.nextUrl.pathname.startsWith("/about")) {
    console.log("Visiting About");
  }

  if (request.nextUrl.pathname.startsWith("/api/users")) {
    console.log("Visiting the Users API");
  }

  // Practical Example 1 : Using Cookies
  // const response = NextResponse.next();
  // if (request.nextUrl.pathname.startsWith("/setCookie")) {
  //   let cookieMessage = request.nextUrl.searchParams.get("message");
  //   response.cookies.set("message", cookieMessage);
  // }

  // if (request.nextUrl.pathname.startsWith("/getCookie")) {
  //   let cookie = request.cookies.get("message");
  //   console.log(cookie);
  // }

  // return response;

  // Practical Example 2 : URL Rewrites
  const requestHeaders = new Headers(request.headers);
  const language = requestHeaders.get("Accept-Language");

  if (language.includes("fr")) {
    return NextResponse.rewrite(new URL("/fr/about", request.url));
  }
}

export const config = {
  matcher: ["/about"],
};

// Approach 1 : Matching paths by exporting a "config" object within a "matcher" property
// export const config = {
//   matcher: ["/", "/api/users/:path*"],
// };
