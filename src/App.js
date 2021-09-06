import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './components/homepage';
import FilteredPage from './components/filteredPage';

const App = () => {
  const state = useSelector((state) => state.covid);

  return (
    <Router>
      <Switch>
        <Route path={`/${state.country}`}>
          <FilteredPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
