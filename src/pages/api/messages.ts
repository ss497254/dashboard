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
        (await getMessages()).docs.map((doc) => ({
          id: doc.id,
          time: doc.createTime.nanoseconds,
          ...doc.data(),
        }))
      );

    if (req.method === "POST") {
      return res.json(await addMessage(req.body));
    }
  } catch (e) {
    console.error(e);
  }

  return res.status(404).json({ message: "Not found" });
});
