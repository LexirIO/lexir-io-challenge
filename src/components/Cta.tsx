import Image from "next/image";
import CtaImage from "../public/imgs/pexels-cottonbro-4254032.jpg";

const Cta: React.FC<any> = () => {
  return (
    <>
      <div className="bg-gray-200 font-Lato">
        <div className="mx-auto max-w-7xl">
          <div className=" overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 ">
            <div className=" pt-12 px-8 pr-4">
              <h2 className="text-3xl font-Source font-bold tracking-tight sm:text-4xl">
                Have a brand you’d like to see on{" "}
                <span className="text-green-700">Lexir?</span>
              </h2>
              <p className="mt-4 text-base">
                Lexir is always looking to connect with new exciting craft
                brands from around the world. If you have a brand in mind that
                youd like to see on Lexir, let us know.
              </p>
              <a
                href="#"
                className="mt-8 mb-8 lg:mb-0 inline-flex items-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white"
              >
                Suggest a Brand
              </a>
            </div>
            <div>
              <Image
                src={CtaImage}
                alt="man ordering wines bottles"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
