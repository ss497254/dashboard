import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(404).json({ message: "Not found" });

  try {
    const { url } = req.body;

    const text = await (await fetch(url)).text();
    return res.json({ success: true, message: text });
  } catch (e) {
    console.warn(e);
    res.status(400).json({ success: false, message: "some error occured" });
  }
}
