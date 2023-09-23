import { navigationOptions } from "../data/types";
import Navigation from "./Navigation";

function Header(props: {
  pageTitle: string
}) {

  return (
    <div className="page-title">
      <h1>{props.pageTitle}</h1>
      <Navigation
        navOptions={navigationOptions}
      />
    </div>
  )
}

export default Header;
