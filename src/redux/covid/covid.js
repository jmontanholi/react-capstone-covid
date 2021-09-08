import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERR,
} from '../slices/covidSlice';

const FILTER_BY_COUNTRY = 'covid/covid/FILTER_BY_COUNTRY';

const initialState = {
  data: {},
  loading: false,
  error: {},
  country: 'Afghanistan',
};

const filterByCountry = (payload) => ({
  type: FILTER_BY_COUNTRY,
  payload,
});

const CovidReducer = (state = initialState, action) => {
  if (state === undefined || action === undefined) {
    return initialState;
  }
  switch (action.type) {
    case GET_DATA:
      return { ...state, loading: true };
    case GET_DATA_SUCCESS:
      return { ...state, data: action.data, loading: false };
    case GET_DATA_ERR:
      return { ...state, error: action.error, loading: false };
    case FILTER_BY_COUNTRY:
      return { ...state, country: action.payload };
    default:
      return state;
  }
};

export { CovidReducer as default, filterByCountry };
