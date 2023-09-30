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
      <div className="item-buttons">
        <button
          className="add-to-cart"
          onClick={() => handleAddToCart(props.item)}
          disabled={itemInCart(itemsCart, props.item.id)}
        >
          Add to cart
        </button>
      </div>
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

  function setSprite(spriteUrl: string) {
    if (spriteUrl) {
      return spriteUrl
    }

    // sprite for pokemon named Unown
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png";
  }
}

export default ItemCard;
