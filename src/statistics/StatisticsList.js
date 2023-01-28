import { StatisticsItem } from './StatisticsItem';
import { StatsSection, StatsTitle, StatsList } from './StatisticsList.styled';
import PropTypes from 'prop-types';

export const UploadStats = ({ title, stats }) => {
  return (
    <StatsSection>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList>
        {stats.map(item => (
          <StatisticsItem key={item.id} data={item} />
        ))}
      </StatsList>
    </StatsSection>
  );
};

UploadStats.propTypes = {
  title: PropTypes.string.isRequired,
};
