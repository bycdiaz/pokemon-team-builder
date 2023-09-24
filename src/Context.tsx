import React, { createContext, useState } from "react";

interface TeamCountContextType {
  teamCount: number;
  setTeamCount: React.Dispatch<React.SetStateAction<number>>;
}
export const TeamCountContext = createContext<TeamCountContextType>({
  teamCount: 0,
  setTeamCount: () => { },
});

export function TeamCountProvider(props: { children: React.ReactNode }) {
  const [teamCount, setTeamCount] = useState(0);

  return (
    <TeamCountContext.Provider value={{ teamCount, setTeamCount }}>
      {props.children}
    </TeamCountContext.Provider>
  )
};
