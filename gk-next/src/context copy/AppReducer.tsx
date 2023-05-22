/** @AppReducer */
export const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state;

    case "OPEN_MENU": {
      return { ...state, menuOpen: true };
    }
    case "CLOSE_MENU": {
      return { ...state, menuOpen: false };
    }
  }
};
