let dev = true;

export const API_DOMAIN = dev ? 'http://192.168.42.51:8008/api' : 'http://backend.thinhnv.net/api';

export const TIME_OUT_API = 30;
/**
 * End point
 */
export const END_POINT = {
    /* POST api */
    POST_LOGIN: API_DOMAIN + '/auth/login',
    /* GET api logout */
    GET_LOGOUT: API_DOMAIN + '/auth/logout',
    /* GET api */
    GET_USER_INFO: API_DOMAIN + '/user/info',
    /* GET contacts */
    GET_USER_INFO: API_DOMAIN + '/chat/contacts',
}
