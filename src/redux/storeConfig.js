/* eslint-disable import/no-extraneous-dependencies */
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import CovidReducer from './covid/covid';

const reducers = combineReducers({
  covid: CovidReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk, logger),
);

export default store;
