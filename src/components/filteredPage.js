import React from 'react';
import { useSelector } from 'react-redux';

const FilteredPage = () => {
  const state = useSelector((state) => state.covid);
  return (
    <h1>
      {state.country}
    </h1>
  );
};

export default FilteredPage;
