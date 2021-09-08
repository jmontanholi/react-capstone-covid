import React from 'react';
import { useSelector } from 'react-redux';
import style from './homepage.module.css';
import LoadingAnimation from './loading';
import SelectCountry from './selectCountry';

const HomePage = () => {
  const state = useSelector((state) => state.covid);
  const covidTotal = state.data.total;
  return (
    <div className={style.div}>
      { state.loading
      && <LoadingAnimation />}
      { covidTotal
      && (
      <>
        <h1 data-testid="title" className={`titleFont ${style.homeTitle}`}>Home Page - Covid Situation Report</h1>
        <h2 className={`titleFont ${style.worldTitle}`}><span className={style.paddingLeft}>Worldwide Info - Up to date</span></h2>
        <div className={`${style.generalInfo1} ${style.generalInfo}`}>
          <p data-testid="confirmed" className={`textFont ${style.generalText}`}>
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
        <SelectCountry />
      </>
      )}
    </div>
  );
};

export default HomePage;
