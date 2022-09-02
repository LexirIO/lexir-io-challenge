import { useContext } from "react";

import {ProductContext} from '../context/ProductsContext'

const useProductContext = () => useContext(ProductContext)

export default useProductContext