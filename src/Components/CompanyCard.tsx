import Image from "next/image";
import companyLogo from '../public/baldorialogo.png'
import location from '../public/location.svg'
import category from '../public/category.svg'


export function CompanyCard() {
  return (
    <div className="col-span-2 row-span-2 row-start-1 ">
        <div className="pt-4 pb-12 px-8 border flex flex-col items-center  gap-4 ">
        
        <div className="w-[80%] mb-12 flex justify-center">
            <Image src={companyLogo} alt="logo"  ></Image>
        </div>
        <h1 className="text-2xl font-black">Baldoria Vermouth</h1>
        <p className="text-companytext">Badoria rosso is a red vermouth that balances fresh, herby bitter notes against. Kiss My Rhubarb takes its origins from an old handwritten recipe from co-creators Niels&apos; and Wouters&apos; rebellious grandparents.</p>
        <span className="text-cartgreen font-semibold mb-16">Read More</span>
        <div className="flex items-start gap-4 self-start">
            <div className="pt-1">
            <Image src={location} alt="location"  ></Image>
            </div>
            <div>
                <span className="font-semibold">Location</span>
                <h2 className="text-locationgrey text-xl">London, United Kingdom</h2>
            </div>
        </div>
        <div className="flex items-start gap-4 self-start">
            <div className="pt-1">
            <Image src={category} alt="category"  ></Image>
            </div>
            <div>
                <span className="font-semibold">Product Category</span>
                <div className="flex gap-2  mt-2">
                    <span className="bg-filtergrey text-locationgrey px-4 py-1 rounded-md ">Gin</span>
                    <span className="bg-filtergrey text-locationgrey px-4 py-1 rounded-md">Vodka</span>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}