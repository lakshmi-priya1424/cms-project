import { Route, Routes } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout';
import Home from '../pages/Home'
import Login from '../pages/Login';

import Signup from '../pages/Signup';
import Dashboard from '../layouts/Dashboard';
import AddItem from '../pages/dashboard/AddItem';
import View from '../pages/dashboard/View';
import Introd from '../pages/dashboard/Introd';
import About from '../pages/dashboard/About';
import Developer from '../pages/dashboard/Developer';
import NotFound from '../pages/NotFound';

import MyFavorites from '../pages/dashboard/myFavorites';


import PrivateRoute from './PrivateRoutes';


export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<BasicLayout/>}>
				<Route index element={<Home/>} />
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login/>} />
				<Route path="/signup" element={<Signup />} />

			</Route>
			<Route
				path="/dashboard"
				element={
					<PrivateRoute>
						<Dashboard />
					</PrivateRoute>
				}
			>
				
				{/* <Route path="/dashboard/stats" element={<UserStats />} /> */}
        <Route path='/dashboard/intro' element={<Introd/>}/>
				<Route path="/dashboard/additem" element={<AddItem />} />
				<Route path="/dashboard/view" element={<View />
				<Route path="/dashboard/myfavorites" element={<MyFavorites />} />
        <Route path="/dashboard/developer" element={<Developer/>}/>
        <Route path="/dashboard/about" element={<About/>}/>

			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}