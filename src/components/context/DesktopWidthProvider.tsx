import React, { useContext, useEffect, useState } from 'react';

interface DesktopWidthType {
  isDesktop: boolean;
}

const DesktopWidthContext = React.createContext<DesktopWidthType>({
  isDesktop: true,
});

type Children = {
  children: React.ReactNode;
}

export default function DesktopWidthProvider({ children }: Children) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(
    () => {
      setIsDesktop(window.innerWidth >= 768);
    },
    [],
  );

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  
  return (
    <DesktopWidthContext.Provider value={{isDesktop}}>
      {children}
    </DesktopWidthContext.Provider>
  )
}

export function useIsDesktop() {
  return useContext(DesktopWidthContext);
}
