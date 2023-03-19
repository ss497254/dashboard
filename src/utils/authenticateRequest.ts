import { COOKIE_NAME, COOKIE_TOKEN } from "src/data/constants";

export const authenticateRequest = ({ cookies }: any) => {
  const cookie = cookies[COOKIE_NAME];

  return cookie === COOKIE_TOKEN;
};
