import { NavigationOption, userReadableNavigationOptions } from "../data/types";

function ContentContainer(props: { sectionName: NavigationOption }) {
  return (
    <div>
      {userReadableNavigationOptions[props.sectionName]}
    </div>
  )
}

export default ContentContainer;
