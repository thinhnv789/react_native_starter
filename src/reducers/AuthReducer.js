const df_login = [];
export const login = (state = df_login, action = {}) => {
  switch (action.type) {
    case 'LOGIN':
        return action.payload;
    case 'USER_INFO':
        return action.payload;
    default:
      return state
  }
};