const df_api_error = null;
export const apiError = (state = df_api_error, action = {}) => {
  switch (action.type) {
    case 'API_ERROR':
        return action.payload;
    case 'REMOVE_API_ERROR':
        return action.payload;
    default:
      return state
  }
};