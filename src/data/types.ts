export const home = 'home';
export const featured = 'featured';
export const cart = 'cart';
export const navigationOptions = [home, featured, cart] as const;
export type NavigationOption = typeof navigationOptions[number];

export const userReadableNavigationOptions: {
  [option in NavigationOption]: string
} = {
  home: 'Home',
  featured: 'Featured Items',
  cart: 'My Cart'
};

export type ItemData = {
  cost: number,
  id: number,
  name: string,
  spriteUrl: string,
}

export type Cart = {
  [itemId: number]: {
    item: ItemData,
    quantity: number
  }
}
