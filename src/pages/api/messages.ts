import type { NextApiRequest, NextApiResponse } from "next";
import { middleware } from "src/lib/middleware";
import { addMessage, getMessages } from "src/utils/firebaseMessageHandler";

export default middleware(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET")
      return res.json(
        (await getMessages()).docs
          .map((doc) => ({
            id: doc.id,
            time: doc.createTime.toMillis(),
            ...doc.data(),
          }))
          .sort((a, b) => {
            return a.time - b.time;
          })
      );

    if (req.method === "POST") {
      const doc = await (await addMessage(req.body)).get();
      return res.json({
        id: doc.id,
        time: doc.createTime?.toMillis(),
        ...doc.data(),
      });
    }
  } catch (e) {
    console.error(e);
  }

  return res.status(404).json({ message: "Not found" });
});
