import { NextApiRequest, NextApiResponse } from "next";
import {products} from "../../database/products"

export default async function Post(req:NextApiRequest,resp: NextApiResponse){

  if(req.method === 'GET'){
    const data = products
    return  resp.send(data)
  }

}