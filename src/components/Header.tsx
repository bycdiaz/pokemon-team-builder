import { navigationOptions } from "../data/types";
import Navigation from "./Navigation";
import "../styles/header.css";

function Header(props: {
  pageTitle: string
}) {

  return (
    <div className="header-container">
      <h1 className="page-title">{props.pageTitle}</h1>
      <Navigation
        navOptions={navigationOptions}
      />
    </div>
  )
}

export default Header;
