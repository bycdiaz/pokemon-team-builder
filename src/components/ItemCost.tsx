function ItemCost(
  props: {
    itemCost: number
  }
) {

  return (
    <div className="item-cost-container">
      <div className="item-cost">
        {props.itemCost}
      </div>
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/8/8b/Pok%C3%A9monDollar_VIII_ZH.png/712px-Pok%C3%A9monDollar_VIII_ZH.png"
        alt="pokedollar"
        className="pokedollar-image"
      />
    </div>
  );

}

export default ItemCost;
