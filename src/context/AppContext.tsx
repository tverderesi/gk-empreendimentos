import { createContext, ReactNode, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const AppContext = createContext({} as any);

export const AppProvider = ({ children }: { children?: ReactNode }) => {
  const lumina = {
    buildingName: 'Lumina',
    buildingLink: 'lumina',
    buildingImage: './buildings/lumina/lumina.jpg',
    buildingLogo: './buildings/lumina/logo.png',
  };
  const thirdParty = {
    buildingName: 'Imóveis de Terceiros',
    buildingLink: 'terceiros',
    buildingImage: '',
    buildingLogo: '',
  };

  const folders = {
    buildingName: 'Folders e Tabelas',
    buildingLink: 'folders',
    buildingImage: '',
    buildingLogo: '',
  };

  const initialState = {
    population: [lumina, thirdParty, folders],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export default AppContext;
