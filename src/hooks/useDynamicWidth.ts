import { useEffect, useState } from "react";

export const useDynamicWidth = () => {
  const [screenSize, getDimension] = useState<number>(window.innerWidth);
  const setDimension = () => {
    getDimension(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return { screenSize };
};
