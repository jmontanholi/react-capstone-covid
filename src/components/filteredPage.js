import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BiLeftArrowCircle } from 'react-icons/bi';
import { date } from '../redux/slices/covidSlice';
import style from './filteredPage.module.css';

const FilteredPage = () => {
  const state = useSelector((state) => state.covid);
  let countries;
  if (state.data.dates[date]) {
    countries = state.data.dates[date].countries;
  }
  if (state.data.dates[date]) {
    return (
      <div className={style.div}>
        <button type="button" className={style.backBtn}>
          <NavLink className={style.link} to="/">
            <BiLeftArrowCircle className={style.icon} />
            Back to Home Page
          </NavLink>
        </button>
        <div className={style.titleDiv}>
          <h1 className={`titleFont ${style.countryTitle}`}>
            <span data-testid="country" className={style.marginLeft}>
              {state.country}
            </span>
          </h1>
          <div className={style.titleInfo}>
            <p className={`textFont ${style.titleInfoText}`}>
              {
                countries[state.country].today_confirmed
              }
            </p>
            <h2 className={`titleFont ${style.infoTitle}`}>
              Total Confirmed Cases
            </h2>
          </div>
        </div>
        <h2 className={`titleFont ${style.ulTitle}`}>
          <span className={style.marginLeft}>
            More Info
          </span>
        </h2>
        <ul data-testid="ul" className={style.ul}>
          <li className={`${style.li1} ${style.li}`}>
            <p className={`textFont ${style.liText}`}>
              {
                countries[state.country].today_deaths
              }
            </p>
            <h2 className={`titleFont ${style.liTitle}`}>
              Total Confirmed Deaths
            </h2>
          </li>
          <li className={`${style.li2} ${style.li}`}>
            <p className={`textFont ${style.liText}`}>
              {
                countries[state.country].today_recovered
              }
            </p>
            <h2 className={`titleFont ${style.liTitle}`}>
              Total Confirmed Recovered
            </h2>
          </li>
          <li className={`${style.li2} ${style.li}`}>
            <p className={`textFont ${style.liText}`}>
              {
                countries[state.country].today_new_confirmed
              }
            </p>
            <h2 className={`titleFont ${style.liTitle}`}>
              Todays Confirmed Cases
            </h2>
          </li>
          <li className={`${style.li1} ${style.li}`}>
            <p className={`textFont ${style.liText}`}>
              {
                countries[state.country].today_new_deaths
              }
            </p>
            <h2 className={`titleFont ${style.liTitle}`}>
              Todays Deaths
            </h2>
          </li>
          <li className={`${style.li1} ${style.li}`}>
            <p className={`textFont ${style.liText}`}>
              {
                countries[state.country].today_new_recovered
              }
            </p>
            <h2 className={`titleFont ${style.liTitle}`}>
              Todays Recovered
            </h2>
          </li>
          <li className={`${style.li2} ${style.li}`}>
            <p className={`textFont ${style.liText}`}>
              {
                countries[state.country].today_new_open_cases
              }
            </p>
            <h2 className={`titleFont ${style.liTitle}`}>
              Todays Opened Cases
            </h2>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <h2>No data was fetched</h2>
    </div>
  );
};

export default FilteredPage;
