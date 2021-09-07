/* eslint-disable import/no-extraneous-dependencies */
import { applyMiddleware, createStore, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import CovidReducer from './covid/covid';

const reducers = combineReducers({
  covid: CovidReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk),
);

export default store;
