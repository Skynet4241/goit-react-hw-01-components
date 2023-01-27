import { Profile } from 'profile/Profile';
import { UploadStats } from 'statistics/StatisticsList';
import { FriendsList } from 'friends/FriendsList';
import user from '../profile/user.json';
import data from '../statistics/data.json';
import friends from '../friends/friends.json';
import transactions from '../transactions/transactions.json';
import { TransactionsList } from 'transactions/TransactionsList';
import { Heading } from 'statistics/StatisticsList.styled';
export const App = () => {
  return (
    <div>
      <Heading>Social Profile</Heading>
      <Profile userProfile={user} />
      <Heading>Statistics</Heading>
      <UploadStats stats={data} />
      <Heading>Friends List</Heading>
      <FriendsList amigos={friends} />
      <Heading>Transaction History</Heading>
      <TransactionsList userTransactions={transactions} />
    </div>
  );
};
