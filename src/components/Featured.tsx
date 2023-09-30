import { useEffect, useState } from "react";
import { ItemData } from "../data/types";
import { randomNumberGenerator } from "../helpers";
import ItemCard from "./ItemCard";

function Featured() {
  const [itemData, setItemData] = useState<ItemData[]>([]);

  useEffect(() => {
    getFeaturedItemData();
  }, []);

  return (
    <div className="featured-items">
      {
        itemData.map(item => (
          <ItemCard item={item} />
        ))
      }
    </div>
  );

  async function getFeaturedItemData() {
    Promise.all(randomNumberGenerator().map(idNumber =>
      fetch(`https://pokeapi.co/api/v2/item/${idNumber}`)
    ))
      .then(async promiseResult => {
        const requestData: ItemData[] = [];

        for (const promise of promiseResult) {
          const data = await promise.json();

          requestData.push({
            cost: data.cost,
            id: data.id,
            name: data.name,
            spriteUrl: data.sprites.default,
          })
        }

        setItemData(requestData);
      }).catch(error => {
        // TODO: Handle error with some UI indicating a failure to get pokemon data
        console.log(error);
      })
  }
}

export default Featured;
