import { NextApiRequest, NextApiResponse } from "next";
import { COOKIE_NAME, COOKIE_TOKEN } from "src/data/constants";

export const middleware =
  (cb: any) => (req: NextApiRequest, res: NextApiResponse) => {
    const cookie = req.cookies[COOKIE_NAME];

    if (cookie === COOKIE_TOKEN) return cb(req, res);

    return res.status(403).json({ message: "nahi hai kuch" });
  };
