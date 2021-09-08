/* eslint-disable max-len */
const GET_DATA = 'covid/covidSlice/GET_DATA';
const GET_DATA_SUCCESS = 'covid/covidSlice/GET_DATA_SUCCESS';
const GET_DATA_ERR = 'covid/covidSlice/GET_DATA_ERR';
const placeholder = new Date(Date.now());
const date = `${placeholder.getFullYear()}-0${(placeholder.getMonth() + 1)}-0${placeholder.getDate()}`;
const appUrl = `https://api.covid19tracking.narrativa.com/api/${date}`;

const getData = () => async (dispatch) => {
  dispatch({ type: GET_DATA });
  const response = await fetch(appUrl);
  const data = await response.json();
  return dispatch({ type: GET_DATA_SUCCESS, data });
};

export {
  getData as default,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERR,
  date,
};
