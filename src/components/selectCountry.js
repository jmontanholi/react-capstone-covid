import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { date } from '../redux/slices/covidSlice';
import style from './homepage.module.css';
import Button from './submitBtn';

const SelectCountry = () => {
  const state = useSelector((state) => state.covid);
  const [select, setSelect] = useState('Afghanistan');
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
      <Button icon="right" select={select} path={`/${select}`} />
    </form>
  );
};

export default SelectCountry;
