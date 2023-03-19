import type { NextApiRequest, NextApiResponse } from "next";
import { generateCookie } from "src/utils/cookies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("set-cookie", generateCookie());

  if (req.method !== "POST")
    return res.status(404).json({ message: "not found" });

  try {
    const { pin_code } = JSON.parse(req.body);

    if (typeof pin_code === "string" && pin_code === process.env.PIN_CODE) {
      res.setHeader("set-cookie", generateCookie());
      return res.json({ message: "nice", success: true });
    }

    throw new Error();
  } catch {
    res.status(400).json({ message: "some error occured" });
  }
}
