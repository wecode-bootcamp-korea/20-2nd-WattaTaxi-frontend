import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';
import DetailTaxiDriver from './Pages/DetailTaxiDriver/DetailTaxiDriver';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/detail" component={DetailTaxiDriver} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
