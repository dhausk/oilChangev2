import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavHeader from './components/Header';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import VehicleLog from './pages/VehicleLogs';

const routes = {
	Landing: "/", //landing and splash page, step two show screenshots
	Profile: "/", //user landing page shows user details
	VehicleLog: "/vehicles", //shows user's vehicles crud capable to add
}

function AppRouter() {
	const signedIn = true;

	if (signedIn === true) { // signed in Users see this
		return (
			<Router>
				<NavHeader loggedIn={true} />
				<Route path={routes.Profile} component={Profile} />
				<Route path={routes.VehicleLog} component={VehicleLog} />
				{/* vehicles are shown in the users profile page. the vehicle Log page displays once a vehicle is clicked.
				each page is crud capable for vehicles in profile and logs in vehicleLog.*/}

			</Router>
		);
	}   // base landing page for users not signed in.
	else {
		return (
			<Router>
				<NavHeader loggedIn={false} />
				<Route path={routes.Landing} component={Landing} />
			</Router>
		)
	}
}

export default AppRouter;