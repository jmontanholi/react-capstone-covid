// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../redux/storeConfig';
import App from '../App';
import FilteredPage from '../components/filteredPage';

const unmockedFetch = global.fetch;
const data = {
  dates: {
    '2021-09-07': {
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

describe('Code Integration, Fetch and Show', () => {
  it('Should return a home page with the right number of confirmed cases', async () => {
    render(<MockApp />);

    setTimeout(() => {
      const title = screen.getByTestId('confirmed');

      expect(title).toBe('221599126');
    }, 2000);
  });

  it('Should render more informations page with the right information', () => {
    render(<MockApp />);

    fireEvent.click(screen.getByTestId('button'));

    render(<MockFilteredPage />);

    const title = screen.getByTestId('country');

    expect(title.textContent).toBe('Afghanistan');
  });

  it('Should render more informations page with the right amount of information', () => {
    render(<MockFilteredPage />);

    const ul = screen.getByTestId('ul');

    expect(ul.children.length).toBe(6);
  });
});
