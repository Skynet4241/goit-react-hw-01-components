import PropTypes from 'prop-types';
import { StatsItem } from './StatisticsList.styled';
export const StatisticsItem = ({ data: { label, percentage } }) => {
  return (
    <StatsItem>
      <span>{label}</span>
      <span>{percentage}</span>
    </StatsItem>
  );
};

StatisticsItem.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
