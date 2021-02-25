import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home/index';
import Search from './pages/Search/index';

function Routes() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/:user" component={Search}></Route>
        </Switch>
    </Router>
  );
}

export default Routes;