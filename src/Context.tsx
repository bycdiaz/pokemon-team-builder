import React, { createContext, useState } from "react";
import { Cart } from "./data/types";

interface ItemCartContextType {
  itemsCart: Cart;
  setItemCart: React.Dispatch<React.SetStateAction<Cart>>;
}
export const ItemCartContext = createContext<ItemCartContextType>({
  itemsCart: {},
  setItemCart: () => { },
});

export function TeamCountProvider(props: { children: React.ReactNode }) {
  const [itemsCart, setItemCart] = useState({});

  return (
    <ItemCartContext.Provider value={{ itemsCart, setItemCart }}>
      {props.children}
    </ItemCartContext.Provider>
  )
};
