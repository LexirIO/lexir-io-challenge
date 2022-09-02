import { ReactNode, useState } from "react";

interface PropsNewModal {
  onClose: () => void;
  children: ReactNode;
}

export function ModalMenuComponent({ onClose, children }: PropsNewModal) {
  const [animation, setAnimation] = useState<boolean>(false);

  const handleOutsideClick = (e: any) => {
    setAnimation(true);
    if (e.target.id === "external") {
      setTimeout(onClose, 200);
    }
  };

  return (
    <>
      <div
        id="external"
        aria-hidden="true"
        onClick={handleOutsideClick}
        className="flex w-full min-h-screen top-0  h-full  z-50 opacity-60 absolute"
      />
      <div
        id="internal"
        className={`flex text-black w-[220px]  absolute bg-gray-100
        flex-col justify-center items-start px-3 py-4
        text-[0.5rem] font-normal md:hidden
        top-16 right-16 rounded-tl-md rounded-b-md overflow-hidden
        border-none shadow-pattern stick z-50 
        animate-openMenu ${animation === true ? "animate-closeMenu" : null}
      `}
      >
        {children}
      </div>
    </>
  );
}
