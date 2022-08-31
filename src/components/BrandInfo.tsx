import { Brand, Category } from "src/Models";
import Image from 'next/image';
import brandApi from '../api/brands';

import LocationIcon from "../assets/icons/locationIcon";
import CategoriesIcon from "../assets/icons/categoriesIcon";

import styles from "../styles/BrandInfo.module.css";

interface BrandProps {
    name: string;
}

export default function BrandComponent(props: BrandProps) {

    //simulation of api call
    let brandData: Brand | null = brandApi.getBrandByName(props.name);

    if(brandData != null) {
    return (
        <div className={"flex flex-col justify-center px-8 border " + styles.lato}>

            {/* Brand Logo */}
            <div className="lg:mx-6 xl:mx-12 my-10"><Image src={brandData?.logo} alt="Brand Logo" /></div>

            {/* Brand Details */}
            <div className="flex flex-col mx-auto">
                <h2 className={"mb-3 " + styles.brandName}>{brandData?.fullName}</h2>
                <p className={"" + styles.brandDescription}>{brandData?.description}</p>
                <button className={"mt-10 mb-5 " + styles.btnReadMore}>Read More</button>
            </div>
            <div className="flex items-center my-4 mx-auto md:mx-0">
                <LocationIcon />
                <div className="mt-3 mx-4 font-normal">
                    <span className={styles.location}>Location</span>
                    <p className={styles.locationInfo}>{brandData?.location}</p>
                </div>
            </div>
            <div className="flex items-center my-4 font-normal mx-auto md:mx-0">
                <CategoriesIcon />
                <div className="mt-3 mx-4 font-normal">
                    <span className={"block "+styles.categories}>Product Categories</span>

                    {/* Categorist list */}
                    {brandData?.categories.map((category: Category) => {
                        return <div className={"inline-block m-2 py-1 px-5 "+styles.category} key={category}>{category}</div>
                    })}
                </div>
            </div>
        </div>
    )}else {
        return <div></div>
    }
}