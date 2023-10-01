import { NavigationOption } from "../data/types";
import Featured from "./Featured";
import Cart from "./Cart";
import Error from "./Error";

function ContentContainer(props: { sectionName: NavigationOption }) {
  if (props.sectionName === 'featured') {
    return <Featured />;
  } else if (props.sectionName === 'cart') {
    return <Cart />;
  }

  return <Error errorMessage="Oh no! This content doesn't exist!" />
}

export default ContentContainer;
