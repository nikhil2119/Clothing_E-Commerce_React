import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductSection from './ProductSection';
import ProductPage from './ProductPage'; // Import your ProductPage component

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductSection} />
        <Route path="/product/:id" component={ProductPage} /> // Assuming each product has a unique ID
      </Switch>
    </Router>
  );
}

export default AppRouter;
