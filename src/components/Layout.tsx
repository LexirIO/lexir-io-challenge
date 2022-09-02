import React, { ReactNode, useState } from "react";
import FooterComponent from "./footer";
import HeaderComponent from "./header";
import { MenuComponent } from "./header/menu";
import { ModalMenuComponent } from "./modal/modalMenu";

interface Props {
  children: ReactNode;
}

export function LayoutComponent({ children }: Props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleCloseModal() {
    setModalIsOpen(() => false);
  }

  function handleOpenModal() {
    setModalIsOpen(() => true);
  }

  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <HeaderComponent handleOpenModal={() => handleOpenModal()} />
      <div
        className="flex justify-center items-center flex-col px-[35px] 
        lg:flex-row lg:justify-start lg:items-start mt-[40px]
        md:gap-y-10
        "
      >
        {children}
      </div>
      <FooterComponent />
      {modalIsOpen ? (
        <ModalMenuComponent onClose={() => handleCloseModal()}>
          <MenuComponent />
        </ModalMenuComponent>
      ) : null}
    </div>
  );
}
