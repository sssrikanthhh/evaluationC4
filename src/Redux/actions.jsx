import axios from 'axios';
// action types
export const LOGIN = 'LOGIN';
// Action Creators
export const userLogin = userData => {
	return {
		type: LOGIN,
		payload: userData,
	};
};

export const validateUser = payload => dispatch => {
	const { data } = axios('http://localhost:8080/users');
	let reqUser = data.filter(user => {
		if (user.username === payload.username && user.pass === payload.password) {
			return user;
		}
	});
	if (reqUser) {
		localStorage.setItem('userDetails', JSON.stringify(reqUser));
		dispatch(userLogin(reqUser));
	}
};
