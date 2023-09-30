import { useContext } from "react";
import { ItemCartContext } from "../Context";
import { ItemData } from "../data/types";
import { itemInCart } from "../helpers";

function ItemCard(
  props: {
    item: ItemData
  }
) {
  const { itemsCart, setItemCart } = useContext(ItemCartContext);

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
      {showAddOrRemoveButton()}
    </div>
  );

  function handleAddToCart(item: ItemData) {
    if (itemInCart(itemsCart, item.id)) {
      return;
    }

    setItemCart((prevState) => {
      return {
        ...prevState,
        [item.id]: item
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
      <button
        className="add-to-cart"
        onClick={() => handleAddToCart(props.item)}
      >
        Add to cart
      </button>
    )
  }
}

export default ItemCard;
