import { NavigationOption, userReadableNavigationOptions } from "../data/types";
import Featured from "./Featured";
import Cart from "./Cart";

function ContentContainer(props: { sectionName: NavigationOption }) {

  if (props.sectionName === 'featured') {
    return <Featured />;
  } else if (props.sectionName === 'cart') {
    return <Cart />;
  } else {
    return (
      <div>
        {userReadableNavigationOptions[props.sectionName]}
      </div>
    )
  }
}

export default ContentContainer;
