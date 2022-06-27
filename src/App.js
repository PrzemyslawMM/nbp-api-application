import React from 'react';
import FormNumber from './components/Forms/FormNumber';
import FormDate from './components/Forms/FormDate';
import { Red, Wrapper } from './App.style';
import Table from './components/Table/Table';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { apiResponse, start } = useStateContext();
  return (
    <Wrapper>
      <p>NBP api application</p>
      <FormNumber placeholder="Set amount of PLN" />
      <FormDate label="Effective Date of money" />
      {/* eslint-disable-next-line no-nested-ternary */}
      {apiResponse && start ? (
        <Table />
      ) : apiResponse === null ? (
        <Red>No data</Red>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};

export default App;
