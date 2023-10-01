import { useEffect, useState } from "react";
import { DataRequest, ItemData } from "../data/types";
import { randomNumberGenerator } from "../helpers";
import ItemCard from "./ItemCard";
import "../styles/items-container.css";


function Featured() {
  const [itemData, setItemData] = useState<ItemData[]>([]);
  const [dataRequest, setDataRequest] = useState<DataRequest>('loading');

  useEffect(() => {
    getFeaturedItemData();
  }, []);

  switch (dataRequest) {
    case 'loaded':
      return (
        <div className="featured-items items-container">
          {
            itemData.map(item => (
              <ItemCard item={item} />
            ))
          }
        </div>
      )
    case 'loading':
      return (
        <div className="loading">
          Loading...
        </div>
      );
    case 'error':
      return (
        <div className="error">
          Oh no! An error occurred while getting the data!
        </div>
      );
  }

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
        setDataRequest('loaded');
      }).catch(() => {
        setDataRequest('error');
      })
  }
}

export default Featured;
