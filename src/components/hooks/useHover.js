import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const useHover = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    isDesktopOrLaptop ? setHovered(false) : setHovered(true);
    const cleanUp = ref.current;

    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);

    return () => {
      cleanUp.removeEventListener("mouseenter", enter);
      cleanUp.removeEventListener("mouseleave", leave);
    };
  }, [isDesktopOrLaptop]);

  const enter = () => {
    setHovered(true);
  };

  const leave = () => {
    setHovered(false);
  };

  return [hovered, ref];
};

export default useHover;
