import { FriendsItem } from './FriendsItem';
import { FriendList } from './FriendsList.styled';

export const FriendsList = ({ amigos }) => {
  return (
    <FriendList>
      {amigos.map(item => (
        <FriendsItem key={item.id} data={item} />
      ))}
    </FriendList>
  );
};
