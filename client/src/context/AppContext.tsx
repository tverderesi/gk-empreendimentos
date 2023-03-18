import { createContext, ReactNode, useReducer, useState } from "react";
import { AppReducer } from "./AppReducer";

const AppContext = createContext({} as any);

export const AppProvider = ({ children }: { children?: ReactNode }) => {
  const lumina = {
    building: true,
    title: "lumina",
    link: "lumina",
    image: "./buildings/lumina/lumina.jpg",
    logo: "./buildings/lumina/logo.png",
    shape: [
      {
        title: "Torre A",

        availability: {
          total: 100,
          available: 33,
          negotiation: 33,
          unavailable: 33,
        },
      },
      {
        title: "Torre B",
        availability: {
          total: 90,
          available: 42,
          negotiation: 23,
          unavailable: 25,
        },
      },
    ],
  };

  const initialState = {
    population: [lumina],
    link: "",
    menuOpen: false,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;