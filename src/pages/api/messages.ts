import type { NextApiRequest, NextApiResponse } from "next";
import { middleware } from "src/lib/middleware";
import { addMessage, getMessages } from "src/utils/firebaseMessageHandler";

export default middleware(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      let { offset } = req.query as any;

      if (isNaN(offset) || ((offset = parseInt(offset)) && offset < 0))
        offset = undefined;

      return res.json(
        (await getMessages(offset)).docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    }

    if (req.method === "POST" && req.body.content && req.body.dir) {
      req.body.time = new Date().getTime();

      const doc = await (await addMessage(req.body)).get();

      return res.json({
        id: doc.id,
        ...doc.data(),
      });
    }
  } catch (e) {
    console.error(e);
  }

  return res.status(404).json({ message: "Not found" });
});
