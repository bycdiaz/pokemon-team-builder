import { useContext } from "react";
import { ItemCartContext } from "../Context";
import ItemCard from "./ItemCard";
import { totalCost } from "../helpers";

function Cart() {
  const { itemsCart } = useContext(ItemCartContext);
  return (
    <div className="cart-container">
      <div className="cart-total-cost">
        {`Total Cost: ${totalCost(itemsCart)}`}
      </div>
      <div className="items-in-cart">
        {
          Object.values(itemsCart).map(item => (
            <ItemCard item={item.item} />
          ))
        }
      </div>
    </div>
  );


}

export default Cart;
