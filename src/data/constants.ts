export const __prod__ = process.env.NODE_ENV === "production";

export const PIN_CODE = process.env.PIN_CODE || "thanks";

// cookie auth
export const COOKIE_NAME = process.env.COOKIE_NAME || "-";
export const COOKIE_TOKEN = process.env.COOKIE_TOKEN || "-";

// firebase
export const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID!;
export const FIREBASE_PRIVATE_KEY = process.env.FIREBASE_PRIVATE_KEY!;
export const FIREBASE_CLIENT_EMAIL = process.env.FIREBASE_CLIENT_EMAIL!;
