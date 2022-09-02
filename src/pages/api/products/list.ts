import { NextApiRequest, NextApiResponse } from "next";
import data from "../data/products/list";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(data);
}