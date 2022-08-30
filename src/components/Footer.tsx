import React from "react";

export const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="bg-zinc-800 w-full">
      <div className="p-10">
        <div className="flex justify-between items-baseline">
          <img src="/assets/img/lexir-logo-white.svg" className="h-8"/>
          <div>
            <div className="text-neutral-400 text-2xl">COMMUNITY</div>
            <div className="text-white pt-6 text-xl">Lexir for Brands</div>
            <div className="text-white pt-6 text-xl">Business Buyers</div>
            <div className="text-white pt-6 text-xl">Sales Affiliates</div>
          </div>
          <div>
            <div className="text-neutral-400 text-2xl">PLATFORM</div>
            <div className="text-white pt-6 text-xl">Resources</div>
            <div className="text-white pt-6 text-xl">Pricing</div>
            <div className="text-white pt-6 text-xl">Get Started</div>
          </div>
          <div>
            <div className="text-neutral-400 text-2xl">COMPANY</div>
            <div className="text-white pt-6 text-xl">About</div>
            <div className="text-white pt-6 text-xl">Contact</div>
            <div className="text-white pt-6 text-xl">Legal</div>
          </div>
          <div>
            <div className="text-neutral-400 text-2xl">LEXIR SHOP</div>
            <div className="text-white pt-6 text-xl">Brands</div>
            <div className="text-white pt-6 text-xl">Spirits</div>
            <div className="text-white pt-6 text-xl">Wine</div>
            <div className="text-white pt-6 text-xl">Blog</div>
          </div>
          <div className="flex justify-evenly w-1/12">
            <img src="/assets/icons/networks/medium.svg" className="w-9" />
            <img src="/assets/icons/networks/facebook.svg" className="w-9"/>
            <img src="/assets/icons/networks/instagram.svg" className="w-9"/>
            <img src="/assets/icons/networks/linkedin.svg" className="w-9"/>
          </div>
        </div>

        <img src="/assets/img/line.png" className="w-full my-10" />
        <div className="flex justify-between">
          <div className="text-white font-thin text-xl">{`© ${getCurrentYear()} Lexir Inc. `}</div>
          <div className="flex justify-between">
            <div className="text-white text-xl px-12">Privacy</div>
            <div className="text-white text-xl">Terms of service</div>
          </div>
        </div>
      </div>
    </div>
  );
};
