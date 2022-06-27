/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStateContext } from '../../contexts/ContextProvider';

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
  const { currentNumberValue, setCurrentNumberValue } = useStateContext();

  const handleChange = (e) => {
    if (e.target.value < 0) {
      return;
    }
    setCurrentNumberValue(e.target.value);
  };

  return (
    <Input
      type="number"
      placeholder={placeholder}
      onChange={handleChange}
      value={currentNumberValue}
    />
  );
};

FormNumber.propTypes = {
  placeholder: PropTypes.string,
};

export default FormNumber;
