import CovidReducer from '../redux/covid/covid';

describe('Covid Reducer', () => {
  it('Receives no state and no action and return the initial state', () => {
    const initialState = {
      data: {},
      loading: false,
      error: {},
      country: 'Afghanistan',
    };
    expect(CovidReducer()).toStrictEqual(initialState);
  });

  it('Receives no state and return the initial state', () => {
    const initialState = {
      data: {},
      loading: false,
      error: {},
      country: 'Afghanistan',
    };

    expect(CovidReducer({ type: 'GET_BOOKS' })).toStrictEqual(initialState);
  });

  it('Receives no action and return the current state', () => {
    const initialState = {
      data: {},
      loading: false,
      error: {},
      country: 'Afghanistan',
    };

    expect(CovidReducer(initialState)).toStrictEqual(initialState);
  });

  it('Receives action and state and returns the right values', () => {
    const initialState = {
      data: {},
      loading: false,
      error: {},
      country: 'Afghanistan',
    };
    const GET_DATA = 'covid/covidSlice/GET_DATA';

    expect(CovidReducer(initialState, { type: GET_DATA })).toStrictEqual({
      data: {},
      loading: true,
      error: {},
      country: 'Afghanistan',
    });
  });
});
