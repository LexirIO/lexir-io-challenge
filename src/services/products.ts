import axios from "@utils/axios"
import { Product } from "src/types/product";

const productList = () => {
    return axios.get<Product[]>('/api/products/list');
}

export {productList}