import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../Redux/actions';

export const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loginData, setLoginData] = useState();
	const user = useSelector(store => store.user);

	const handleChange = e => {
		const { name, value } = e.target;
		setLoginData({
			...loginData,
			[name]: value,
		});
	};

	const handleSubmit = () => {
		dispatch(userLogin(loginData));
		if (user.role === 'admin') {
			navigate('/orders');
		} else {
			navigate('/neworder');
		}
	};
	return (
		<div>
			<input
				className='username'
				type='text'
				name='username'
				placeholder='Enter Username'
				onChange={handleChange}
			/>
			<input
				className='password'
				type='password'
				name='password'
				placeholder='Enter password'
				onChange={handleChange}
			/>
			{/* On this button click make network req to find user with same username and password */}
			{/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
			<button onClick={handleSubmit} className='submit'>
				Login
			</button>
		</div>
	);
};
