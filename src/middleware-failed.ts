// export { default } from "next-auth/middleware";
//
// export const config = { matcher: ["/image-generator"] };

// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";
//
// export default withAuth(
//   function middleware(req) {
//     // This function executes after authentication checks pass.
//     return NextResponse.next();
//   },
//   {
//     callbacks: {
//       // Return true if a token exists. If false, the user is redirected to the login page.
//       authorized: ({ token }) => !!token,
//     },
//     pages: {
//       // Points NextAuth directly to your custom sign-in page if authentication fails
//       signIn: "/login",
//     },
//   },
// );
//
// export const config = {
//   matcher: ["/image-generator"],
// };
