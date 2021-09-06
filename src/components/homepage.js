import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import getData, { date } from '../redux/slices/covidSlice';
import { filterByCountry } from '../redux/covid/covid';

const HomePage = () => {
  const [select, setSelect] = useState('None');
  const dispatch = useDispatch();
  const state = useSelector((state) => state.covid);
  const covidTotal = state.data.total;
  let countries;
  let countriesKeys;
  if (state.data.dates) {
    countries = state.data.dates[date].countries;
    countriesKeys = Object.entries(countries);
  }
  useEffect(() => {
    dispatch(getData());
  }, []);
  const handleCategory = (event) => {
    setSelect(event.target.value);
  };
  return (
    <div>
      { state.loading
      && (
      <>
        <h2>Loading, please wait</h2>
        <div />
      </>
      )}
      { covidTotal
      && (
      <>
        <h1>Home Page - Covid Situation Report</h1>
        <h2>All Confirmed Cases Worldwide</h2>
        <p>
          {covidTotal.today_confirmed}
        </p>
        <h2>All Confirmed Deaths Worldwide</h2>
        <p>
          {covidTotal.today_deaths}
        </p>
        <h2>Filter By Country:</h2>
        <form>
          <label htmlFor="countries">
            Countries:
            <select name="countries" id="countries" onChange={(e) => { handleCategory(e); }}>
              <option value="None">None</option>
              {
                countriesKeys.map((country) => (
                  <option key={country[0]} value={country[0]}>{country[0]}</option>
                ))
              }
            </select>
          </label>
        </form>
        <button type="button" onClick={() => { dispatch(filterByCountry(select)); }}><NavLink to={`/${select}`}>Filter</NavLink></button>
      </>
      )}
    </div>
  );
};

export default HomePage;
