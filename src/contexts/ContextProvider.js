/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';

const StateContext = createContext();

const fetcher = (...args) => fetch(...args).then((res) => res.json());

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [currentNumberValue, setCurrentNumberValue] = useState();
  const [currentDateValue, setCurrentDateValue] = useState();
  const [apiResponse, setApiResponse] = useState({});
  const { data } = useSWR(
    'http://api.nbp.pl/api/exchangerates/tables/A/?format=json',
    fetcher
  );

  useEffect(() => {
    if (data) {
      setApiResponse(...data);
      const s = [...data];
      const Date = s[0].effectiveDate;
      const year = Date.substring(0, 4);
      const month = Date.substring(5, 7);
      const day = Date.substring(8);
      setCurrentDateValue(`${year}-${month}-${day}`);
    }
  }, [data]);

  return (
    <StateContext.Provider
      value={{
        currentDateValue,
        currentNumberValue,
        setCurrentDateValue,
        setCurrentNumberValue,
        apiResponse,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
