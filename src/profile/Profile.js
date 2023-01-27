import PropTypes from 'prop-types';
import {
  Wrap,
  ProfileWrap,
  Image,
  Title,
  Text,
  List,
  Item,
  SpanTitle,
  SpanText,
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
    <Wrap>
      <ProfileWrap>
        <Image src={avatar} alt={username} />
        <Title>{username}</Title>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </ProfileWrap>

      <List>
        <Item>
          <SpanTitle>Followers</SpanTitle>
          <SpanText>{followers}</SpanText>
        </Item>
        <Item>
          <SpanTitle>Views</SpanTitle>
          <SpanText>{views}</SpanText>
        </Item>
        <Item>
          <SpanTitle>Likes</SpanTitle>
          <SpanText>{likes}</SpanText>
        </Item>
      </List>
    </Wrap>
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
