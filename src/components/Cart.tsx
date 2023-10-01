import { useContext } from "react";
import { ItemCartContext } from "../Context";
import ItemCard from "./ItemCard";
import { cartIsEmpty, totalCost } from "../helpers";
import ItemCost from "./ItemCost";
import '../styles/items-container.css';
import '../styles/cart.css';

function Cart() {
  const { itemsCart } = useContext(ItemCartContext);

  if (cartIsEmpty(itemsCart)) {
    return (
      <div className="empty-cart">
        Your cart is empty! Go to Featured Items to add something to your cart.
      </div>
    )
  }

  return (
    <div className="cart-container">
      <div className="cart-total-cost">
        <span>Total cost: </span>
        <ItemCost itemCost={totalCost(itemsCart)} />
      </div>
      <div className="items-in-cart items-container">
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
