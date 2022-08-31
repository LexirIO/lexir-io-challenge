import Image from "next/image";
import { Product } from "src/Models";
import styles from "../styles/Product.module.css";
import products from "../api/products";
import AddIcon from "../assets/icons/addIcon";

let productsList: Product[] = products;

interface ProductsProps {
    search: string;
}

function ProductCard(product: Product) {
    return (<div key={product.id}>
        <div className={"w-fit" + styles.bgCardColor}> <Image src={product?.image} alt="Product Image" width={175} height={250} /> </div>
        <div className="flex justify-between"><h2 className={"font-bold " + styles.productName}>MR GASTON</h2> <span className={styles.price}>€{product.price}</span></div>
        <div className="flex justify-between"><p className={styles.category}>{product.category}</p> <button className={"px-1 "+styles.addButon}><AddIcon /></button></div>
    </div>)
}

export default function Products(props: ProductsProps) {

    //Simulation of a call to the fake api
    function getApiData(name: string): Product[] | null {
        if (name == "baldoria") {
            return productsList;
        } else
            return null;
    }

    let products: Product[] | null = getApiData(props.search);

    return <div className={"flex gap-8 flex-wrap justify-center lg:justify-evenly " + styles.lato}>
        {products?.map((product: Product) => {
            return ProductCard(product);
        })}
    </div>
}