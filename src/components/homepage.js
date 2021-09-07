import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BiRightArrowCircle } from 'react-icons/bi';
import { date } from '../redux/slices/covidSlice';
import { filterByCountry } from '../redux/covid/covid';
import style from './homepage.module.css';

const HomePage = () => {
  const [select, setSelect] = useState('Afghanistan');
  const dispatch = useDispatch();
  const state = useSelector((state) => state.covid);
  const covidTotal = state.data.total;
  let countries;
  let countriesKeys;
  if (state.data.dates) {
    countries = state.data.dates[date].countries;
    countriesKeys = Object.entries(countries);
  }
  const handleCategory = (event) => {
    setSelect(event.target.value);
  };
  return (
    <div className={style.div}>
      { state.loading
      && (
      <div className={style.loadingDiv}>
        <h2 className={style.loading}>Loading, please wait</h2>
        <div className="loadingio-spinner-reload-zln0owzosys">
          <div className="ldio-cf5nk0nv464">
            <div>
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
      )}
      { covidTotal
      && (
      <>
        <h1 className={`titleFont ${style.homeTitle}`}>Home Page - Covid Situation Report</h1>
        <h2 className={`titleFont ${style.worldTitle}`}><span className={style.paddingLeft}>Worldwide Info - Up to date</span></h2>
        <div className={`${style.generalInfo1} ${style.generalInfo}`}>
          <p className={`textFont ${style.generalText}`}>
            {covidTotal.today_confirmed}
          </p>
          <h2 className={`titleFont ${style.generalTitle}`}>Confirmed Cases</h2>
        </div>
        <div className={style.generalDiv}>
          <div className={`${style.generalInfo2} ${style.generalInfo}`}>
            <p className={`textFont ${style.generalText}`}>
              {covidTotal.today_deaths}
            </p>
            <h2 className={`titleFont ${style.generalTitle}`}>Confirmed Deaths</h2>
          </div>
          <div className={`${style.generalInfo3} ${style.generalInfo}`}>
            <p className={`textFont ${style.generalText}`}>
              {covidTotal.today_recovered}
            </p>
            <h2 className={`titleFont ${style.generalTitle}`}>Recovered</h2>
          </div>
        </div>
        <form className={style.form}>
          <h2 className={`titleFont ${style.worldTitle}`}><span className={style.paddingLeft}>Filter By Country:</span></h2>
          <div className={style.labelDiv}>
            <label htmlFor="countries" className={`textFont ${style.label}`}>
              <select className={style.select} name="countries" id="countries" onChange={(e) => { handleCategory(e); }}>
                {
                  countriesKeys.map((country) => (
                    <option
                      className={`textFont ${style.option}`}
                      key={country[0]}
                      value={country[0]}
                    >
                      {country[0]}
                    </option>
                  ))
                }
              </select>
            </label>
          </div>
          <button type="button" className={style.submitBtn} onClick={() => { dispatch(filterByCountry(select)); }}>
            <NavLink className={style.link} to={`/${select}`}>
              <BiRightArrowCircle />
            </NavLink>
          </button>
        </form>
      </>
      )}
    </div>
  );
};

export default HomePage;
