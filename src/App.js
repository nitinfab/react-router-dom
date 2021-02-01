import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import FeatureScreen from './screens/FeatureScreen';
import ContactUs from './screens/ContactUs';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact>
         <FeatureScreen/>
      </Route>
      <Route path="/contacts" exact>
        <ContactUs/>
      </Route>
      <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
