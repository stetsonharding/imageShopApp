import { useState, useEffect, useRef } from "react";

const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const cleanUp = ref.current;

    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);

    return () => {
      cleanUp.removeEventListener("mouseenter", enter);
      cleanUp.removeEventListener("mouseleave", leave);
    };
  }, []);

  const enter = () => {
    setHovered(true);
  };

  const leave = () => {
    setHovered(false);
  };

  return [hovered, ref];
};

export default useHover;
