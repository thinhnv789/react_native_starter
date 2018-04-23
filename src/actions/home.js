

export const getHomeMenu = (data = {}) => {
    return async dispatch => {
        dispatch({
            type: 'MENU',
            payload: {test: 'Test Redux Action'}
        });
    }
}
