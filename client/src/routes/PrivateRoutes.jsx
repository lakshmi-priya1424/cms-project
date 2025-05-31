import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import AuthContext from '../context/AuthContext';

export default function PrivateRoute({ children }) {
	const { isAuth } = useContext(AuthContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (!isAuth) {
			navigate('/login');
		}
	}, [isAuth, navigate]);
	return children;
}