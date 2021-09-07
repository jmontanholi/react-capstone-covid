import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { date } from '../redux/slices/covidSlice';

const FilteredPage = () => {
  const state = useSelector((state) => state.covid);
  let countries;
  if (state.data.dates) {
    countries = state.data.dates[date].countries;
  }
  return (
    <div>
      <h1>
        {state.country}
      </h1>
      <ul>
        All confirmed cases:
        <li>
          {
            countries[state.country].today_confirmed
          }
        </li>
        <li>
          All confirmed deaths:
          {
            countries[state.country].today_deaths
          }
        </li>
      </ul>
      <button type="button">
        <NavLink to="/">
          {'< Back'}
        </NavLink>
      </button>
    </div>
  );
};

export default FilteredPage;
