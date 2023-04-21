import { createContext, ReactNode, useReducer, useState } from "react";
import { lumina } from "../dummyData/luminaTable";
import { AppReducer } from "./AppReducer";
import { buildings } from "../dummyData/buildings";

const AppContext = createContext({} as any);

export const AppProvider = ({ children }: { children?: ReactNode }) => {
  const initialState = {
    population: [lumina],
    link: "",
    menuOpen: false,
    buildings: buildings,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
