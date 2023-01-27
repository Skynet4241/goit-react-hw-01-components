import PropTypes from 'prop-types';
import { IoEllipse } from 'react-icons/io5';

export const FriendsItem = ({ data: { avatar, name, isOnline, id } }) => {
  return (
    <li>
      <span>
        {isOnline} <IoEllipse />
      </span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
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
