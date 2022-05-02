import { LOGIN } from './actions';

const init = {
	isLoggedIn: false,
	user: {},
};

export const reducer = (store = init, { type, payload }) => {
	switch (type) {
		case LOGIN:
			return { ...store, user: payload, isLoggedIn: true };
		default:
			return store;
	}
};
