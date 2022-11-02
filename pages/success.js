import React from "react";
import { useStateContext } from "../context/StateContext";

export default function Success() {
  const { setCartitems } = useStateContext();

  useEffect(() => {
    localStorage.clear()
    setCartitems([])
  }, [])
  

  return <div>Success</div>;
}
