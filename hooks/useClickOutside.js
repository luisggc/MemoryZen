import { useEffect, useRef } from "react";

export default function useClickOutside(handler) {
  const refComponent = useRef();

  useEffect(() => {
    const clickOutSideComponent = (e) => {
      const isClickingOutsideItem =
        refComponent.current && !refComponent.current.contains(e.target);
      if (isClickingOutsideItem) {
        handler();
      }
    };
    window.addEventListener("click", clickOutSideComponent, true);
    return () => {
      window.removeEventListener("click", clickOutSideComponent, true);
    };
  }, []);

  return [refComponent];
}
