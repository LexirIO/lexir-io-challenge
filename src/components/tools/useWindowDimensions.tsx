import { useState, useEffect } from "react";

function getWindowDimensions(): number {
  //requires client side to function
  if (typeof window !== "undefined") {
    const { innerWidth: width } = window;
    return width;
  } else {
    return 0;
  }
}

export default function useWindowDimensions(): number {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
