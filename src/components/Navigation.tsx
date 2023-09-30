import { Link } from "react-router-dom";
import { NavigationOption, userReadableNavigationOptions } from "../data/types";
import { useContext } from "react";
import { ItemCartContext } from "../Context";
import { itemsInCart } from "../helpers";

function Navigation(props: {
  navOptions: readonly NavigationOption[]
}) {
  const { itemsCart } = useContext(ItemCartContext);

  return (
    <div>
      {props.navOptions.map(option => {
        return (
          <div className="navigation-link">
            <Link
              to={setLink(option)}
              key={option}
            >
              <div>
                {userReadableNavigationOptions[option]}
              </div>
            </Link>
            <div
              className="cart-count"
            >
              {option === 'cart' && itemsInCart(itemsCart)}
            </div>
          </div>
        )
      })}
    </div>
  )

  function setLink(option: NavigationOption) {
    if (option === 'home') {
      return '/';
    }

    return `/${option}`;
  }
}

export default Navigation;
