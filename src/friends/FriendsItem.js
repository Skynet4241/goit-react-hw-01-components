import PropTypes from 'prop-types';
import { FriendItem, FriendStatus, FriendName } from './FriendsList.styled';

export const FriendsItem = ({ data: { avatar, name, isOnline, id } }) => {
  return (
    <FriendItem>
      <FriendStatus online={isOnline}>{isOnline}</FriendStatus>
      <img src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendsItem.propTypes = {
  data: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
