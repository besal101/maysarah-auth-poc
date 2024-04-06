/**
 * An array of routes that are accesible to public
 * These routes donot require authentication
 * @types {string[]}
 */

export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @types {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefic for API authentication routes
 * Routes that start with this prefix are used for API
 * authentiction purposes
 * @types {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 *The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
