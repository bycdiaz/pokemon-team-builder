import { useContext } from "react";
import { ItemCartContext } from "../Context";
import ItemCard from "./ItemCard";

function Cart() {
  const { itemsCart } = useContext(ItemCartContext);
  console.log(itemsCart);

  return (
    <div className="items-in-cart">
      {
        Object.values(itemsCart).map(item => (
          <ItemCard item={item.item} />
        ))
      }
    </div>
  );
}

export default Cart;
