import Image from "next/image";
import brandData from "../data/brands";

type brands = {
  logo: string;
  name: string;
  slogan: string;
  location: string;
  flag: string;
};

const url = "/image/brands/";
const countryUrl = "/image/country/";

// type brands = {
//     [key: string]: string;
// }

const Brands = () => {
  return (
    <div className="mx-2">
      <h2 className="text-4xl my-6 font-bold">Brands</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-16 mx-auto">
        {brandData.length > 0 ? (
          brandData.map((brand, i) => {
            return (
              <div className="brand_card" key={i}>
                <Image
                  src={`${url}${brand.logo}`}
                  alt={brand.name}
                  width={72}
                  height={40}
                />
                <div className="space-y-2">
                  <h3>{brand.name}</h3>
                  <small>{brand.slogan}</small>
                  <div className="flex">
                    <Image
                      src={`${countryUrl}${brand.flag}`}
                      alt={brand.flag}
                      width={22}
                      height={15}
                    />
                    <small className="mx-2">{brand.location}</small>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No Brands</p>
        )}
      </div>
    </div>
  );
};

export default Brands;
