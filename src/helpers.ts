import { ItemData } from "./data/types";

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

export function itemInCart(cart: ItemData | {}, itemId: number) {
  return Object.keys(cart).includes(itemId.toString());
}
