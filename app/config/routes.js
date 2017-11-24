import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import DashboardView from '../views/Dashboard';
import MinorView from '../views/Minor';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/dashboard" />
            <Route path="dashboard" component={DashboardView}> </Route>
            <Route path="minor" component={MinorView}> </Route>
        </Route>
    </Router>

);