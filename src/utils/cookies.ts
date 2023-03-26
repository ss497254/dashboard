import { COOKIE_NAME, COOKIE_TOKEN, __prod__ } from "src/data/constants";

const MaxAge = 5 * 24 * 60 * 60; // 5 days

export const getSessionCookie = () => {
  return `${COOKIE_NAME}=${COOKIE_TOKEN}; path=/; SameSite=Strict; httpOnly=true; Secure=${__prod__}`;
};

export const getPersistentCookie = () => {
  return `${COOKIE_NAME}=${COOKIE_TOKEN}; path=/; SameSite=Strict; httpOnly=true; max-age=${MaxAge} Secure=${__prod__}`;
};
