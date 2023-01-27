import { TransactionsItem } from './TransactionsItem';

export const TransactionsList = ({ userTransactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {userTransactions.map(item => (
          <TransactionsItem key={item.id} data={item} />
        ))}
      </tbody>
    </table>
  );
};
