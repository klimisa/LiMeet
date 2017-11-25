import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import DashboardView from '../views/Dashboard';
import OrganizerView from '../views/Organizer';
import RulesView from '../views/Rules';
import HelpView from '../views/Help';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/dashboard" />
            <Route path="dashboard" component={DashboardView}> </Route>
            <Route path="organizer" component={OrganizerView}> </Route>
            <Route path="rules" component={RulesView}> </Route>
            <Route path="help" component={HelpView}> </Route>
        </Route>
    </Router>

);