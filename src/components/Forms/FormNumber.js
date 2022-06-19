/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  border-bottom: black 1px solid;
  margin-top: 15px;
  outline: none;
  min-width: 300px;
  text-align: center;

  &:focus {
    border-bottom: rgba(255, 0, 208, 0.32) 1px solid;
  }
`;

const FormNumber = ({ placeholder }) => {
  const [currentValue, setCurrentValue] = useState();

  const handleChange = (e) => {
    if (e.target.value < 0) {
      return;
    }
    setCurrentValue(e.target.value);
  };

  return (
    <Input
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      value={currentValue}
    />
  );
};

FormNumber.propTypes = {
  placeholder: PropTypes.string,
};

export default FormNumber;
