import { COOKIE_NAME, COOKIE_TOKEN, __prod__ } from "src/data/constants";

export const generateCookie = () => {
  return `${COOKIE_NAME}=${COOKIE_TOKEN}; path=/; SameSite=Strict; httpOnly=true; Secure=${__prod__}`;
};
