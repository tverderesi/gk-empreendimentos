/** @AppReducer */
export const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state;
    case 'POPULATE': {
      return { ...state, population: action.payload };
    }
  }
};
