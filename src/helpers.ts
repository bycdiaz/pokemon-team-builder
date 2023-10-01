import { Cart, ItemData, NameRequestData } from "./data/types";

export function randomNumberGenerator() {
  const randomNumbers: number[] = [];

  while (randomNumbers.length < 10) {
    const randomNumber = Math.floor(Math.random() * 2110) + 1;

    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  return randomNumbers;
}

/**
 * Returns boolean indicating if item is in cart
 */
export function itemInCart(cart: ItemData | {}, itemId: number) {
  return Object.keys(cart).includes(itemId.toString());
}

/**
 * Count of all items in cart
 */
export function itemsInCart(cart: Cart): number {
  return Object.values(cart).reduce((count, item) => {
    return count + item.quantity;
  }, 0);
}

export function cartIsEmpty(cart: Cart): boolean {
  return itemsInCart(cart) === 0;
}

/**
 * Total cost of all items in cart
 */
export function totalCost(cart: Cart) {
  return Object.values(cart).reduce((total, item) => {
    return total + item.item.cost * item.quantity;
  }, 0);
}

export function getEnglishName(names: NameRequestData[]) {
  return names.find(name => name.language.name === 'en')?.name || 'Name not found';
}
