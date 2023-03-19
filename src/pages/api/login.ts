import type { NextApiRequest, NextApiResponse } from "next";
import { PIN_CODE } from "src/data/constants";
import { generateCookie } from "src/utils/cookies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(404).json({ message: "Not found" });

  try {
    const { pin_code } = req.body;

    if (pin_code === PIN_CODE) {
      res.setHeader("set-cookie", generateCookie());
      return res.json({ message: "nice", success: true });
    }

    throw new Error();
  } catch {
    res.status(400).json({ message: "some error occured" });
  }
}
