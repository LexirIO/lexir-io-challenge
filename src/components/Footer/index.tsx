export const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="bg-zinc-800 w-full">
      <div className="p-10">
        <div className="flex justify-between items-baseline">
          <img src="/assets/img/lexir-logo-white.svg" className="h-8" />
          <div>
            <div className="text-neutral-400 text-2xl">COMMUNITY</div>
            <div className="flex flex-col items-start">
              <button className="text-white pt-6 text-xl">Lexir for Brands</button>
              <button className="text-white pt-6 text-xl">Business Buyers</button>
              <button className="text-white pt-6 text-xl">Sales Affiliates</button>
            </div>
          </div>
          <div>
            <div className="text-neutral-400 text-2xl">PLATFORM</div>
            <div className="flex flex-col items-start">
              <button className="text-white pt-6 text-xl">Resources</button>
              <button className="text-white pt-6 text-xl">Pricing</button>
              <button className="text-white pt-6 text-xl">Get Started</button>
            </div>
          </div>
          <div>
            <div className="text-neutral-400 text-2xl">COMPANY</div>
            <div className="flex flex-col items-start">
              <button className="text-white pt-6 text-xl">About</button>
              <button className="text-white pt-6 text-xl">Contact</button>
              <button className="text-white pt-6 text-xl">Legal</button>
            </div>
          </div>
          <div>
            <div className="text-neutral-400 text-2xl">LEXIR SHOP</div>
            <div className="flex flex-col items-start">
              <button className="text-white pt-6 text-xl">Brands</button>
              <button className="text-white pt-6 text-xl">Spirits</button>
              <button className="text-white pt-6 text-xl">Wine</button>
              <button className="text-white pt-6 text-xl">Blog</button>
            </div>
          </div>
          <div className="flex justify-evenly w-1/12">
            <a href="#">
              <img src="/assets/icons/networks/medium.svg" className="w-10" />
            </a>
            <a href="#">
              <img src="/assets/icons/networks/facebook.svg" className="w-10" />{" "}
            </a>
            <a href="#">
              <img src="/assets/icons/networks/instagram.svg" className="w-10" />{" "}
            </a>
            <a href="#">
              <img src="/assets/icons/networks/linkedin.svg" className="w-10" />{" "}
            </a>
          </div>
        </div>

        <img src="/assets/img/line.png" className="w-full my-10" />
        <div className="flex justify-between">
          <div className="text-white font-thin text-xl">{`© ${getCurrentYear()} Lexir Inc. `}</div>
          <div className="flex justify-between">
            <button className="text-white text-xl px-12">Privacy</button>
            <button className="text-white text-xl">Terms of service</button>
          </div>
        </div>
      </div>
    </div>
  );
};
