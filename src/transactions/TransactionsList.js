import { TransactionsItem } from './TransactionsItem';
import {
  TransactionsTable,
  TransactionsTableTitle,
} from './TransactionsList.styled';

export const TransactionsList = ({ userTransactions }) => {
  return (
    <TransactionsTable>
      <thead>
        <tr>
          <TransactionsTableTitle>Type</TransactionsTableTitle>
          <TransactionsTableTitle>Amount</TransactionsTableTitle>
          <TransactionsTableTitle>Currency</TransactionsTableTitle>
        </tr>
      </thead>
      <tbody>
        {userTransactions.map(item => (
          <TransactionsItem key={item.id} data={item} />
        ))}
      </tbody>
    </TransactionsTable>
  );
};
