import Overlay from "../../Others/Overlay";
import { useState } from "react";

const Hamburger = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {menu && <Overlay />}
      <div
        className=" flex flex-col justify-between content-between md:hidden h-6 w-8.5 z-20"
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <div className="bg-slate-800 h-1 rounded"></div>
        <div className="bg-slate-800 h-1 rounded"></div>
        <div className="bg-slate-800 h-1 rounded"></div>
      </div>
    </>
  );
};

export default Hamburger;
