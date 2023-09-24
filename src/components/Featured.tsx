import { useEffect, useState } from "react";
import { featuredPokemon } from "../data/featuredPokemon";
import { PokemonData } from "../data/types";

function Featured() {
  const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);

  useEffect(() => {
    getFeaturedPokemonData();
  }, []);

  return (
    <div>
      Featured Pokemon!!
    </div>
  );

  async function getFeaturedPokemonData() {
    Promise.all(featuredPokemon.map(pokemon =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    ))
      .then(async promiseResult => {
        const requestData: PokemonData[] = [];

        for (const pokemonPromise of promiseResult) {
          const data = await pokemonPromise.json();

          requestData.push({
            name: data.name,
            spriteUrl: data.sprites.front_default,
            height: data.height,
            weight: data.weight,
            types: data.types.map((type: any) => type.type.name)
          })
        }
        setPokemonData(requestData);
      }).catch(error => {
        // TODO: Handle error with some UI indicating a failure to get pokemon data
        console.log(error);
      })
  }
}

export default Featured;
