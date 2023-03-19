import { NextApiRequest, NextApiResponse } from "next";
import { authenticateRequest } from "src/utils/authenticateRequest";

export const middleware =
  (cb: any) => (req: NextApiRequest, res: NextApiResponse) => {
    if (authenticateRequest(req)) return cb(req, res);

    return res.status(403).json({ message: "nahi hai kuch" });
  };
