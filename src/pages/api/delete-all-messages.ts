import type { NextApiRequest, NextApiResponse } from "next";
import { middleware } from "src/lib/middleware";
import { deleteAllMessages } from "src/utils/firebaseMessageHandler";

export default middleware(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "DELETE") {
      return res.json(await deleteAllMessages());
    }
  } catch (e) {
    console.error(e);
  }

  return res.status(404).json({ message: "Not found" });
});
