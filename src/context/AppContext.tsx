import { createContext, ReactNode, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const AppContext = createContext({} as any);

export const AppProvider = ({ children }: { children?: ReactNode }) => {
  const initialState = {
    menuItems: ['Lumina', 'Imóveis de Terceiros', 'Folders e Tabelas'],
    menuLinks: ['lumina', 'terceiros', 'folders-e-tabelas'],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export default AppContext;
