import { FriendsItem } from './FriendsItem';

export const FriendsList = ({ amigos }) => {
  return (
    <ul>
      {amigos.map(item => (
        <FriendsItem key={item.id} data={item} />
      ))}
    </ul>
  );
};
