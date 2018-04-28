import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { _requestApiSuccess } from './request-results';
import { TIME_OUT_API, API_CONFIG } from './../config/api';

export const getRequestApi = async (url, options={}) => {
	let token = await AsyncStorage.getItem('login_token');
	console.log('token', token);

	const instance = axios.create();
	let config = {
		headers: { Authorization: token }
	};

	instance.defaults.timeout = TIME_OUT_API;

	return axios.get(url, config).then(res => {
		const response = res.data;
		
		return response;
	}).catch(err => {
		// return Promise.resolve(_errorOnTryCatch(null, url, err));
	});
};

export const postRequestApi = (url, data, options={}, dispatch) => {
	const instance = axios.create();

	instance.defaults.timeout = TIME_OUT_API;
	let config = {};

	return axios.post(url, data, config).then(res => {
		const response = res.data;

		return response;
	}).catch(err => {
		// return Promise.resolve(_errorOnTryCatch(null, url, err));
	});
};