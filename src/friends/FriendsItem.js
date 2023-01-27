import PropTypes from 'prop-types';
import { FriendItem, FriendSpan } from './FriendsList.styled';

export const FriendsItem = ({ data: { avatar, name, isOnline, id } }) => {
  return (
    <FriendItem>
      <FriendSpan online={isOnline}>{isOnline}</FriendSpan>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
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
