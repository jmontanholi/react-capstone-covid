/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi';
import { filterByCountry } from '../redux/covid/covid';
import style from './homepage.module.css';

const Button = (something) => {
  const dispatch = useDispatch();
  const { icon, select, path } = something;
  return (
    <button data-testid="button" type="button" className={style.submitBtn} onClick={() => { dispatch(filterByCountry(select)); }}>
      <NavLink className={style.link} to={path}>
        {
          icon === 'right' ? <BiRightArrowCircle /> : (
            <div>
              <BiLeftArrowCircle />
              Back To Home Page
            </div>
          )
        }
      </NavLink>
    </button>
  );
};

export default Button;
