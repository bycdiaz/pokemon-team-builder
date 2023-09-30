import { useContext, useState } from "react";
import { ItemCartContext } from "../Context";
import { ItemData } from "../data/types";
import { itemInCart } from "../helpers";

function ItemCard(
  props: {
    item: ItemData
  }
) {
  const { itemsCart, setItemCart } = useContext(ItemCartContext);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="store-item">
      <img
        src={setSprite(props.item.spriteUrl)}
        alt={props.item.name}
        className="item-sprite"
      />
      <div className="item-name">
        {props.item.name}
      </div>
      <div className="item-cost">
        {props.item.cost}
      </div>
      {quantityInCart()}
      {showAddOrRemoveButton()}
    </div>
  );

  function quantityInCart() {
    if (itemInCart(itemsCart, props.item.id)) {
      return (
        <div className="item-quantity-count">
          {`Quantity in cart: ${itemsCart[props.item.id].quantity}`}
        </div>
      )
    }

    return null;
  }

  function handleAddToCart(item: ItemData, quantity: number) {
    if (itemInCart(itemsCart, item.id)) {
      return;
    }

    setItemCart((prevState) => {
      return {
        ...prevState,
        [item.id]: {
          item,
          quantity
        }
      }
    });
  }

  function handleRemoveFromCart(item: ItemData) {
    if (!itemInCart(itemsCart, item.id)) {
      return;
    }

    const currentState = { ...itemsCart };
    delete currentState[item.id];
    setItemCart(currentState);
  }

  function setSprite(spriteUrl: string) {
    if (spriteUrl) {
      return spriteUrl
    }

    // sprite for pokemon named Unown
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png";
  }

  function showAddOrRemoveButton() {
    if (itemInCart(itemsCart, props.item.id)) {
      return (
        <button
          className="remove-from-cart"
          onClick={() => handleRemoveFromCart(props.item)}
        >
          Remove from cart
        </button>
      )
    }

    return (
      <div className="cart-buttons">
        <div className="quantity-buttons">
          <button
            className="increase"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
          <button
            className="decrease"
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === 1}
          >
            -
          </button>
        </div>
        <button
          className="add-to-cart-button"
          onClick={() => handleAddToCart(props.item, quantity)}
        >
          {`Add ${quantity} to cart`}
        </button>
      </div>
    )
  }
}

export default ItemCard;
