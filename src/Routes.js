import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateUser from './components/pages/users/Createusers';
import DashboardMain from './components/pages/Dashboard/dashboardMain';
import ListofUsers from './components/pages/users/Listofusers';
import ListOfVendors from './components/pages/Vendor/LIstofvendor';
import CreateVendor from './components/pages/Vendor/Createvendor';
import Profile from './components/pages/Login/Profile';

function Routes() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/Dashboard" exact component={DashboardMain} />
          <Route path="/CreateUser" exact component={CreateUser} />
          <Route path="/ListofUsers" exact component={ListofUsers} />
          <Route path="/CreateVendor" exact component={CreateVendor} />
          <Route path="/ListOfVendors" exact component={ListOfVendors} />
          <Route path="/Profile" exact component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
