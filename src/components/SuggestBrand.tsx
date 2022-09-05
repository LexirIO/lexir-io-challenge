import Image from "next/image";

import Wine from "../public/assets/wine.jpg";

const headingClasses = "text-5xl font-bold font-heading leading-[56px]";

function SuggestBrand() {
  return (
    <div className="flex w-full h-brandSuggestion ">
      {/* Heading, text and button */}
      <div className="basis-1/2 bg-secondary pl-[34px] pr-[30px] pt-[50px]">
        <h1 className={headingClasses}>
          Have a brand you'd like to see on
          <span className={`${headingClasses} text-success`}>&nbsp;Lexir</span>?
        </h1>
        <p className="mt-[23px]">
          Lexir is always looking to connect with new exciting craft brands from
          around the world. If you have a brand in mind that you'd like to see
          on Lexir, let us know.
        </p>
        <button className="bg-primary h-[49px] w-[244px] text-white font-bold mt-[53px] rounded">
          Suggest a Brand
        </button>
      </div>
      {/* Image */}
      <div className="basis-1/2">
        <Image src={Wine} height={394} width={605} />
      </div>
    </div>
  );
}

export default SuggestBrand;
