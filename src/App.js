import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './components/homepage';
import FilteredPage from './components/filteredPage';
import getData from './redux/slices/covidSlice';

const App = () => {
  const state = useSelector((state) => state.covid);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
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
