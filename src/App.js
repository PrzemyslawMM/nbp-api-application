import React from 'react';
import FormNumber from './components/Forms/FormNumber';
import FormDate from './components/Forms/FormDate';
import { Wrapper } from './App.style';

const App = () => {
  return (
    <Wrapper>
      <p>NBP api application</p>
      <FormNumber placeholder="Set amount of PLN" />
      <FormDate label="Effective Date of money" />
    </Wrapper>
  );
};

export default App;
