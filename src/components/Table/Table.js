import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import { Wrapper, TableItem, TableItemName } from './Table.style';

const Table = () => {
  const { apiResponse } = useStateContext();
  const { currentNumberValue } = useStateContext();
  const { rates } = apiResponse;
  return (
    <Wrapper>
      <thead>
        <tr>
          <TableItem as="th">Currency</TableItem>
          <TableItem as="th">Currency code</TableItem>
          <TableItem as="th">Amount of money</TableItem>
        </tr>
      </thead>
      <tbody>
        {rates.map((item) => (
          <tr key={item.code}>
            <TableItemName>{item.currency}</TableItemName>
            <TableItem>{item.code}</TableItem>
            <TableItem>
              {parseFloat((currentNumberValue / item.mid).toFixed(2))}
            </TableItem>
          </tr>
        ))}
      </tbody>
    </Wrapper>
  );
};

export default Table;
