import styled from 'styled-components';

export const TransactionsTable = styled.table`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  border-collapse: collapse;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,
    rgb(0 0 0 / 20%) 0px 2px 1px;
  border-radius: 0px 0px 4px 4px;
`;

export const TransactionsTableTitle = styled.th`
  padding: 15px;
  font-weight: 500;
  font-size: 18px;
  color: rgb(255, 255, 255);
  background-color: darkturquoise;
  border-right: 1px solid rgb(255, 255, 255);
  font-family: 'Times New Roman', Times, serif;
`;

export const TransactionsTableString = styled.tr`
  font-family: 'Times New Roman', Times, serif;
  :nth-child(even) {
    background-color: lightgrey;
  }
  :hover {
    background-color: grey;
    color: wheat;
  }
`;

export const TransactionsTableStringValue = styled.td`
  padding: 10px;
`;
