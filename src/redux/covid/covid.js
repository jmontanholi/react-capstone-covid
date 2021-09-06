const TEST = 'test';
const initialState = {
  data: '',
  loading: '',
  error: '',
};

const CovidReducer = (state = initialState, action) => {
  switch (action.payload) {
    case TEST:
      return state;
    default:
      return state;
  }
};

export default CovidReducer;
