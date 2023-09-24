import { NavigationOption, userReadableNavigationOptions } from "../data/types";
import Featured from "./Featured";

function ContentContainer(props: { sectionName: NavigationOption }) {
  const section = props.sectionName;

  if (section === 'featured') {
    return <Featured />;
  } else {
    return (
      <div>
        {userReadableNavigationOptions[props.sectionName]}
      </div>
    )
  }
}

export default ContentContainer;
