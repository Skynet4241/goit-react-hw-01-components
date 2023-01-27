import { StatisticsItem } from './StatisticsItem';
import { StatsSection, StatsTitle, StatsList } from './StatisticsList.styled';

export const UploadStats = ({ stats }) => {
  return (
    <StatsSection>
      <StatsTitle>Upload Stats</StatsTitle>
      <StatsList>
        {stats.map(item => (
          <StatisticsItem key={item.id} data={item} />
        ))}
      </StatsList>
    </StatsSection>
  );
};
