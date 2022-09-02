import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "src/interfaces/IProduct";

import data from '../../../data/products.json';

export default (req: NextApiRequest, res: NextApiResponse<IProduct[] | string>) => {
  if (req.method !== 'GET') {
    return res.status(405).send('Only GET requests allowed')
  }
  return res.status(200).json(data);
}