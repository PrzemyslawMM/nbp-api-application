import styled, { keyframes } from 'styled-components';

const Appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Wrapper = styled.table`
  margin-top: 15px;
  border: 1px solid black;
  border-collapse: collapse;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  animation: ${Appear} 0.5s ease-in-out;

  .start & {
    opacity: 1;
  }
`;

export const TableItem = styled.td`
  border: 1px solid black;
`;

export const TableItemName = styled(TableItem)`
  width: 350px;
`;
