export const featuredPokemon = [
  'bulbasaur',
  'butterfree',
  'charizard',
  'pidgeotto',
  'pikachu',
  'squirtle'
] as const;

export type Pokemon = typeof featuredPokemon[number];
