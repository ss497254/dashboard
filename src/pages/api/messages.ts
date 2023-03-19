import type { NextApiRequest, NextApiResponse } from "next";
import { firestoreInstance } from "src/lib/firebase";
import { middleware } from "src/lib/middleware";

export default middleware(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if (req.method !== "POST")
  //   return res.status(404).json({ message: "not found" });

  try {
    const doc = await firestoreInstance()
      .collection("messages")
      .add({ message: "hi how are you" });
    return res.json({ message: "done", success: true, doc });
  } catch (e) {
    console.error(e);
  }

  return res.status(400).json({ message: "some error occured" });
});
