import PropTypes from 'prop-types';

export const StatisticsItem = ({ data: { label, percentage } }) => {
  return (
    <ul>
      <li>
        <span>{label}</span>
        <span>{percentage}</span>
      </li>
    </ul>
  );
};

StatisticsItem.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
