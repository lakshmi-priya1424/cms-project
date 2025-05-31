import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
<<<<<<< HEAD
import AuthContext from '../context/AuthContext';
=======
import AuthContext from '../context/Authcontext';
>>>>>>> 081a667dcb622f73a727b287a8054666b61e600f

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