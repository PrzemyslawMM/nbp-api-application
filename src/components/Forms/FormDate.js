/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './FormNumber';
import { useStateContext } from '../../contexts/ContextProvider';

const FormDate = ({ label }) => {
  const { currentDateValue, setCurrentDateValue } = useStateContext();

  const handleChange = (e) => {
    if (e.target.value < 0) {
      return;
    }
    setCurrentDateValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <Input
        type="date"
        id="date"
        onChange={handleChange}
        value={currentDateValue}
      />
      {label ? <label htmlFor="date">{label}</label> : null}
    </>
  );
};

FormDate.propTypes = {
  label: PropTypes.string,
};

export default FormDate;
