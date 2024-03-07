export { default } from "next-auth/middleware";

/* 
  This is protect the routes after logged out.
  Check nextAuth (middleware) documentation for reference.
*/
export const config = {
  matcher: ["/properties/add", '/profile', '/properties/save', '/messages'],
};