import { getRequestApi, postRequestApi } from './common';
import { END_POINT } from './../config/api';

export const postLogin = (data = {}) => {
    return async dispatch => {
        let result = await postRequestApi(END_POINT.POST_LOGIN, data, {}, dispatch);

        if (result) {
            dispatch({
                type: 'LOGIN',
                payload: result
            });
        }
        return result;
    }
}

export const getLogout = (data = {}) => {
    return async dispatch => {
        let result = await getRequestApi(END_POINT.GET_LOGOUT, data, {});

        return result;
    }
}
