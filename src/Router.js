import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavHeader from './components/Header';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import VehicleLog from './pages/VehicleLogs';



const routes = {
    Landing : "/", //landing and splash page, step two show screenshots
    Profile : "/:user", //user landing page shows vehicles, crud capable to add vehicles
    VehicleLog: "/:user/vehicles", //shows vehicle logs and charts, crud capable to add logs
}

function AppRouter() {
    const signedIn = true;

    if (signedIn === true) { // signed in Users see this
        return (
            <Router>
                <NavHeader loggedIn={true} />
                <Route path={routes.Landing} component={Landing}/>
                <Route path={routes.Profile} component={VehicleLog}/>
                <Route path={routes.VehicleLog}  />
                {/* vehicles are shown in the users profile page. vehicle logs display once a vehicle is clicked.
                each page is crud capable for vehicles and logs.*/}

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