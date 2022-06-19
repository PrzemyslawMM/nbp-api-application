/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [currentNumberValue, setCurrentNumberValue] = useState();
  const [currentDateValue, setCurrentDateValue] = useState();

  return (
    <StateContext.Provider
      value={{
        currentDateValue,
        currentNumberValue,
        setCurrentDateValue,
        setCurrentNumberValue,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
