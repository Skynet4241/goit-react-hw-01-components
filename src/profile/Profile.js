import PropTypes from 'prop-types';
import {
  Block,
  ProfileWrap,
  ProfileImage,
  ProfileTitle,
  ProfileText,
  ProfileList,
  ProfileItem,
  ProfileSpanTitle,
  ProfileSpanText,
} from './Profile.styled';

export const Profile = ({
  userProfile: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Block>
      <ProfileWrap>
        <ProfileImage src={avatar} alt={username} />
        <ProfileTitle>{username}</ProfileTitle>
        <ProfileText>@{tag}</ProfileText>
        <ProfileText>{location}</ProfileText>
      </ProfileWrap>

      <ProfileList>
        <ProfileItem>
          <ProfileSpanTitle>Followers</ProfileSpanTitle>
          <ProfileSpanText>{followers}</ProfileSpanText>
        </ProfileItem>
        <ProfileItem>
          <ProfileSpanTitle>Views</ProfileSpanTitle>
          <ProfileSpanText>{views}</ProfileSpanText>
        </ProfileItem>
        <ProfileItem>
          <ProfileSpanTitle>Likes</ProfileSpanTitle>
          <ProfileSpanText>{likes}</ProfileSpanText>
        </ProfileItem>
      </ProfileList>
    </Block>
  );
};

Profile.propTypes = {
  userProfile: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }).isRequired,
};
