import axios from 'axios';
// action types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
// Action Creators
export const userLogin = userData => {
	return {
		type: LOGIN,
		payload: userData,
	};
};

export const userLogout = () => {
	return {
		type: LOGOUT,
	};
};

export const validateUser = payload => async dispatch => {
	const { data } = await axios('http://localhost:8080/users');
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
