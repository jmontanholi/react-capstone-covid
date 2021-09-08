import TestRenderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import store from '../redux/storeConfig';
import App from '../App';
import FilteredPage from '../components/filteredPage';
import HomePage from '../components/homepage';
import LoadingAnimation from '../components/loading';
import Button from '../components/submitBtn';
import SelectCountry from '../components/selectCountry';

const unmockedFetch = global.fetch;
const data = {
  dates: {
    '2021-09-08': {
      countries: {
        Afghanistan: {
          name: 'Afghanistan',
          today_confirmed: 153626,
          today_deaths: 7144,
          today_new_confirmed: 92,
          today_new_deaths: 3,
          today_new_open_cases: 89,
          today_new_recovered: 0,
          today_recovered: 82586,
        },
      },
    },
  },
  total: {
    today_confirmed: 221599126,
    today_deaths: 4582098,
    today_recovered: 142965213,
  },
  country: 'Afghanistan',
};

beforeAll(() => {
  global.fetch = () => Promise.resolve(
    {
      json: () => Promise.resolve(data),
    },
  );
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

const MockApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const MockFilteredPage = () => (
  <Provider store={store}>
    <Router>
      <FilteredPage />
    </Router>
  </Provider>
);
const flushPromises = () => new Promise(setImmediate);

describe('Home Page', () => {
  it('Renders correctly', async () => {
    const home = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>,
    ).toJSON();
    expect(home).toMatchSnapshot();
  });
});

describe('Filtered Page', () => {
  it('Renders Correctly', async () => {
    await act(async () => {
      render(<MockApp />);
      await flushPromises();
      fireEvent.click(screen.getByTestId('button'));
    });
    await flushPromises();

    const filtered = TestRenderer.create(
      <MockFilteredPage />,
    ).toJSON();

    expect(filtered).toMatchSnapshot();
  });
});

describe('Loading assets', () => {
  it('Renders Correctly', () => {
    const loading = TestRenderer.create(
      <LoadingAnimation />,
    );
    expect(loading).toMatchSnapshot();
  });
});

describe('Submit Button', () => {
  it('Renders Correctly', () => {
    const button = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Button icon="left" path="/" />
        </Router>
      </Provider>,
    );
    expect(button).toMatchSnapshot();
  });
});

describe('Select Country', () => {
  it('Renders Correctly', () => {
    const select = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <SelectCountry />
        </Router>
      </Provider>,
    );
    expect(select).toMatchSnapshot();
  });
});
