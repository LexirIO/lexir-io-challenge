import { Brand } from "src/Models";
import Link from 'next/link'
import styles from '../../styles/BrandPage.module.css'
import brands from "../../api/brands";
import Image from "next/image";

function BrandCard(brand: Brand) {
    return (
        <div className="hover:cursor-pointer">
            <div> <Image src={brand?.logo} alt="brand Image" width={150} height={80} /> </div>
            <h2 className="text-center">{brand.fullName}</h2>
        </div>)
}

export default function BrandIndex() {

    const brandsList: Brand[] = brands.getAllBrands();

    return (
        <div className="my-16">
            <h1 className={"my-8 mx-6 " + styles.title}>Choose your favorite brand to see it's products</h1>
            <div className='flex flex-wrap justify-center my-24 gap-x-16 gap-y-10 mx-10'>
                {brandsList.map((brand) => {
                    return <div key={brand.id}><Link href={`brand/${brand.name}`}>{BrandCard(brand)}</Link></div>;
                })}
            </div>
        </div>

    );
}