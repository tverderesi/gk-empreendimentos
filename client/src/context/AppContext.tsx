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
    address: "Av. Leopoldo Zarling, 1890, Bombas, Bombinhas – SC",
    deadline: "2025-10-01T03:00:00.000Z",
    apartmentTypes: [
      {
        id: "1",
        area: 125.04,
        suites: 3,
        demiSuites: 0,
        blueprintURL:
          "https://tabelas.gkempreendimentos.com.br/wp-content/uploads/2022/12/01B-768x1024.png",
      },
      {
        id: "2",
        area: 151.14,
        suites: 4,
        demiSuites: 0,
        blueprintURL:
          "https://tabelas.gkempreendimentos.com.br/wp-content/uploads/2022/12/01B-768x1024.png",
      },
      {
        id: "3",
        area: 126.43,
        suites: 3,
        demiSuites: 0,
        blueprintURL:
          "https://tabelas.gkempreendimentos.com.br/wp-content/uploads/2022/12/01B-768x1024.png",
      },
      {
        id: "4",
        area: 127.45,
        suites: 3,
        demiSuites: 0,
        blueprintURL:
          "https://tabelas.gkempreendimentos.com.br/wp-content/uploads/2022/12/01B-768x1024.png",
      },
      {
        id: "5",
        area: 127.56,
        suites: 3,
        demiSuites: 0,
        blueprintURL:
          "https://tabelas.gkempreendimentos.com.br/wp-content/uploads/2022/12/01B-768x1024.png",
      },
      {
        id: "6",
        area: 108.56,
        suites: 1,
        demiSuites: 2,
        blueprintURL:
          "https://tabelas.gkempreendimentos.com.br/wp-content/uploads/2022/12/01B-768x1024.png",
      },
      {
        id: "7",
        area: 106.29,
        suites: 1,
        demiSuites: 2,
        blueprintURL:
          "https://tabelas.gkempreendimentos.com.br/wp-content/uploads/2022/12/01B-768x1024.png",
      },
      {
        id: "8",
        area: 125.1,
        suites: 3,
        demiSuites: 0,
        blueprintURL:
          "https://tabelas.gkempreendimentos.com.br/wp-content/uploads/2022/12/01B-768x1024.png",
      },
    ],
    floorType: [
      {
        id: "1",
        apartments: [
          { number: 1, ApartmentTypeId: 1 },
          { number: 2, ApartmentTypeId: 2 },
          { number: 3, ApartmentTypeId: 3 },
          { number: 4, ApartmentTypeId: 4 },
          { number: 5, ApartmentTypeId: 5 },
          { number: 6, ApartmentTypeId: 6 },
          { number: 7, ApartmentTypeId: 7 },
          { number: 8, ApartmentTypeId: 8 },
        ],
      },
    ],
    towers: [
      {
        id: "1",
        name: "Torre A",
        naming: "A",
        floors: [
          {
            id: "1",
            floorNumber: "3",
            hasZero: true,
            floorTypeId: 1,
            apartmentAvailability: [
              { apartmentNumber: 1, availability: "sold" },
              { apartmentNumber: 2, availability: "sold" },
              { apartmentNumber: 3, availability: "sold" },
              { apartmentNumber: 4, availability: "sold" },
              { apartmentNumber: 5, availability: "sold" },
              { apartmentNumber: 6, availability: "sold" },
              { apartmentNumber: 7, availability: "sold" },
              { apartmentNumber: 8, availability: "sold" },
            ],
          },
          {
            id: "2",
            floorNumber: "4",
            hasZero: true,
            floorTypeId: 1,
            apartmentAvailability: [
              { apartmentNumber: 1, availability: "sold" },
              { apartmentNumber: 2, availability: "sold" },
              { apartmentNumber: 3, availability: "sold" },
              { apartmentNumber: 4, availability: "sold" },
              { apartmentNumber: 5, availability: "sold" },
              { apartmentNumber: 6, availability: "sold" },
              { apartmentNumber: 7, availability: "sold" },
              { apartmentNumber: 8, availability: "sold" },
            ],
          },
          {
            id: "3",
            floorNumber: "5",
            hasZero: true,
            floorTypeId: 1,
            apartmentAvailability: [
              { apartmentNumber: 1, availability: "sold" },
              { apartmentNumber: 2, availability: "sold" },
              { apartmentNumber: 3, availability: "sold" },
              { apartmentNumber: 4, availability: "sold" },
              { apartmentNumber: 5, availability: "sold" },
              { apartmentNumber: 6, availability: "sold" },
              { apartmentNumber: 7, availability: "sold" },
              { apartmentNumber: 8, availability: "sold" },
            ],
          },
          {
            id: "4",
            floorNumber: "6",
            hasZero: true,
            floorTypeId: 1,
            apartmentAvailability: [
              { apartmentNumber: 1, availability: "negotiation" },
              { apartmentNumber: 2, availability: "available" },
              { apartmentNumber: 3, availability: "sold" },
              { apartmentNumber: 4, availability: "sold" },
              { apartmentNumber: 5, availability: "available" },
              { apartmentNumber: 6, availability: "sold" },
              { apartmentNumber: 7, availability: "available" },
              { apartmentNumber: 8, availability: "negotiation" },
            ],
          },
        ],
      },
      {
        id: "1",
        name: "Torre A",
        naming: "A",
        floors: [
          {
            id: "1",
            floorNumber: "3",
            hasZero: true,
            floorTypeId: 1,
            apartmentAvailability: [
              { apartmentNumber: 1, availability: "sold" },
              { apartmentNumber: 2, availability: "sold" },
              { apartmentNumber: 3, availability: "sold" },
              { apartmentNumber: 4, availability: "sold" },
              { apartmentNumber: 5, availability: "sold" },
              { apartmentNumber: 6, availability: "sold" },
              { apartmentNumber: 7, availability: "sold" },
              { apartmentNumber: 8, availability: "sold" },
            ],
          },
          {
            id: "2",
            floorNumber: "4",
            hasZero: true,
            floorTypeId: 1,
            apartmentAvailability: [
              { apartmentNumber: 1, availability: "sold" },
              { apartmentNumber: 2, availability: "sold" },
              { apartmentNumber: 3, availability: "sold" },
              { apartmentNumber: 4, availability: "sold" },
              { apartmentNumber: 5, availability: "sold" },
              { apartmentNumber: 6, availability: "sold" },
              { apartmentNumber: 7, availability: "sold" },
              { apartmentNumber: 8, availability: "sold" },
            ],
          },
          {
            id: "3",
            floorNumber: "5",
            hasZero: true,
            floorTypeId: 1,
            apartmentAvailability: [
              { apartmentNumber: 1, availability: "sold" },
              { apartmentNumber: 2, availability: "sold" },
              { apartmentNumber: 3, availability: "sold" },
              { apartmentNumber: 4, availability: "sold" },
              { apartmentNumber: 5, availability: "sold" },
              { apartmentNumber: 6, availability: "sold" },
              { apartmentNumber: 7, availability: "sold" },
              { apartmentNumber: 8, availability: "sold" },
            ],
          },
          {
            id: "4",
            floorNumber: "6",
            hasZero: true,
            floorTypeId: 1,
            apartmentAvailability: [
              { apartmentNumber: 1, availability: "negotiation" },
              { apartmentNumber: 2, availability: "available" },
              { apartmentNumber: 3, availability: "sold" },
              { apartmentNumber: 4, availability: "sold" },
              { apartmentNumber: 5, availability: "available" },
              { apartmentNumber: 6, availability: "sold" },
              { apartmentNumber: 7, availability: "available" },
              { apartmentNumber: 8, availability: "negotiation" },
            ],
          },
        ],
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
