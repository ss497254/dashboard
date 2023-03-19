import type { NextApiRequest, NextApiResponse } from "next";
import { PIN_CODE } from "src/data/constants";
import { middleware } from "src/lib/middleware";
import { deleteAllMessages } from "src/utils/firebaseMessageHandler";

export default middleware(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "DELETE") {
      const { pin_code } = req.body;

      if (pin_code === PIN_CODE) {
        await deleteAllMessages();
        return res.json({ message: "nice", success: true });
      }
    }
  } catch (e) {
    console.error(e);
  }

  return res.status(404).json({ message: "Not found" });
});
