import { ItemData } from "../data/types";

function ItemCard(
  props: {
    item: ItemData
  }
) {
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
    </div>
  );

  function setSprite(spriteUrl: string) {
    if (spriteUrl) {
      return spriteUrl
    }

    // sprite for pokemon named Unown
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png";
  }
}

export default ItemCard;
