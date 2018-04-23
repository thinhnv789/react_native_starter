const df_home_menu = [];
export const homeMenu = (state = df_home_menu, action = {}) => {
  switch (action.type) {
    case 'MENU':
      return action.payload;
    default:
      return state
  }
};