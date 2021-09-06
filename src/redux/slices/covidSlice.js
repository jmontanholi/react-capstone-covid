/* eslint-disable max-len */
const GET_DATA = 'rockets/rocketslice/GET_ROCKETS';
const GET_DATA_SUCCESS = 'rocket/rocketslice/GET_ROCKETS_SUCCESS';
const GET_DATA_ERR = 'rocket/rocketslice/GET_ROCKETS_ERR';
const placeholder = new Date(Date.now());
const date = `${placeholder.getFullYear()}-${(placeholder.getMonth() + 1)}-${placeholder.getDate()}`;
const appUrl = `https://api.covid19tracking.narrativa.com/api/${date}`;

const getData = () => async (dispatch) => {
  dispatch({ type: GET_DATA });
  const response = await fetch(appUrl);
  const data = await response.json();
  console.log({ type: GET_DATA_SUCCESS, data });
};

export {
  getData as default,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERR,
};
