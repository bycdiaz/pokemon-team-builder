export const home = 'home';
export const search = 'search';
export const featured = 'featured';
export const team = 'team';
export const navigationOptions = [home, search, featured, team] as const;
export type NavigationOption = typeof navigationOptions[number];

export const userReadableNavigationOptions: {
  [option in NavigationOption]: string
} = {
  home: 'Home',
  search: 'Search',
  featured: 'Featured Pokemon',
  team: 'My Team'
};

export type PokemonData = {
  name: string,
  spriteUrl: string,
  height: number,
  weight: number,
  types: PokemonType[]
}

export type PokemonType =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";
