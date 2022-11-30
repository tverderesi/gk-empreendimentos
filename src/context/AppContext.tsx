import { createContext, ReactNode, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const AppContext = createContext({} as any);

export const AppProvider = ({ children }: { children?: ReactNode }) => {
  const lumina = {
    building: true,
    title: 'lumina',
    link: 'lumina',
    image: './buildings/lumina/lumina.jpg',
    logo: './buildings/lumina/logo.png',
  };

  const thirdParty = {
    building: false,
    title: 'Imóveis de Terceiros',
    link: 'terceiros',
    image: '',
    logo: '',
  };

  const folders = {
    building: false,
    title: 'Folders e Tabelas',
    link: 'folders',
    image: '',
    logo: '',
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
