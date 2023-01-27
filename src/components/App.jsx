import { Profile } from 'profile/Profile';
import { UploadStats } from 'statistics/StatisticsList';
import { FriendsList } from 'friends/FriendsList';
import user from '../profile/user.json';
import data from '../statistics/data.json';
import friends from '../friends/friends.json';
import transactions from '../transactions/transactions.json';
import { TransactionsList } from 'transactions/TransactionsList';

export const App = () => {
  return (
    <div>
      <Profile userProfile={user} />
      <UploadStats stats={data} />
      <FriendsList amigos={friends} />
      <TransactionsList userTransactions={transactions} />
    </div>
  );
};
