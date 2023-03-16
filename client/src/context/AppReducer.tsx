/** @AppReducer */
export const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state;
    case "POPULATE": {
      return { ...state, population: action.payload };
    }
    case "GET_LINK": {
      return { ...state, link: action.payload };
    }
    case "OPEN_MENU": {
      return { ...state, menuOpen: true };
    }
    case "CLOSE_MENU": {
      return { ...state, menuOpen: false };
    }
  }
};
