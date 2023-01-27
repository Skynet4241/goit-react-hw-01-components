import { StatisticsItem } from './StatisticsItem';

export const UploadStats = ({ stats }) => {
  return (
    <section>
      <h2>Upload stats</h2>
      {stats.map(item => (
        <StatisticsItem key={item.id} data={item} />
      ))}
    </section>
  );
};
