import React from 'react';
import FormNumber from './components/Forms/FormNumber';
import FormDate from './components/Forms/FormDate';
import { Wrapper } from './App.style';
import Table from './components/Table/Table';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { apiResponse, currentNumberValue, start } = useStateContext();
  return (
    <Wrapper className={currentNumberValue === '' ? null : 'start'}>
      <p>NBP api application</p>
      <FormNumber placeholder="Set amount of PLN" />
      <FormDate label="Effective Date of money" />
      {(apiResponse && currentNumberValue) || start ? <Table /> : null}
    </Wrapper>
  );
};

export default App;
