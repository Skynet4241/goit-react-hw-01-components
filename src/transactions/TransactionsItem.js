import PropTypes from 'prop-types';
import {
  TransactionsTableString,
  TransactionsTableStringValue,
} from './TransactionsList.styled';

export const TransactionsItem = ({ data: { id, type, amount, currency } }) => {
  return (
    <TransactionsTableString>
      <TransactionsTableStringValue>{type}</TransactionsTableStringValue>
      <TransactionsTableStringValue>{amount}</TransactionsTableStringValue>
      <TransactionsTableStringValue>{currency}</TransactionsTableStringValue>
    </TransactionsTableString>
  );
};

TransactionsItem.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
