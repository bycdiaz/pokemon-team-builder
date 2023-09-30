import { useEffect, useState } from "react";
import { ItemData } from "../data/types";
import { randomNumberGenerator } from "../helpers";

function Featured() {
  const [itemData, setItemData] = useState<ItemData[]>([]);

  useEffect(() => {
    getFeaturedItemData();
  }, []);

  return (
    <div>
      {/* TODO Import card component */}
      Featured Items!!
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
            name: data.name,
            spriteUrl: data.sprites.default,
            cost: data.cost
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
