/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';

const StateContext = createContext();

const fetcher = (...args) => fetch(...args).then((res) => res.json());

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [currentNumberValue, setCurrentNumberValue] = useState(null);
  const [currentDateValue, setCurrentDateValue] = useState();
  const [start, setStart] = useState(false);
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
      const SetDate = `${year}-${month}-${day}`;
      setCurrentDateValue(SetDate);
      setStart(true);
    }
  }, [data]);

  useEffect(() => {
    if (currentDateValue) {
      axios
        .get(
          `http://api.nbp.pl/api/exchangerates/tables/A/${currentDateValue}/?format=json`
        )
        .then((res) => setApiResponse(...res.data))
        .catch(() => setApiResponse(null));
    }
  }, [currentDateValue]);

  return (
    <StateContext.Provider
      value={{
        currentDateValue,
        currentNumberValue,
        setCurrentDateValue,
        setCurrentNumberValue,
        apiResponse,
        start,
        setStart,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
