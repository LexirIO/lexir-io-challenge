import Navigation from "./navigation";
import Brand from "@components/brand";

import Siwu from "../assets/SiWu-Logo 2.png";

const Brands = () => {
    return (
        <>
            <Navigation />
            <div className="p-9">
                <h1 className="font-serifpro font-bold text-5xl not-italic text-light-black">
                    Brands
                </h1>
                <Brand logo={Siwu} title="Siwu Distillet" subtitle="Aquavit & Gin" flag="D" place="Copehagen, Denmark" />
            </div>
        </>
    );
}

export default Brands;