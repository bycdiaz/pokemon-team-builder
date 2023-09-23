import { Link } from "react-router-dom";
import { NavigationOption, userReadableNavigationOptions } from "../data/types";

function Navigation(props: {
  navOptions: readonly NavigationOption[]
}) {

  return (
    <div>
      {props.navOptions.map(option => {
        return (
          <Link
            to={setLink(option)}
            key={option}
          >
            <div>
              {userReadableNavigationOptions[option]}
            </div>
          </Link>
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
