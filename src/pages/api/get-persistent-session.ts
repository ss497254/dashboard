import type { NextApiRequest, NextApiResponse } from "next";
import { middleware } from "src/lib/middleware";
import { getSessionCookie } from "src/utils/cookies";

export default middleware(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res.status(404).json({ message: "Not found" });

  res.setHeader("set-cookie", getSessionCookie());

  return res.json({ message: "nice", success: true });
});
