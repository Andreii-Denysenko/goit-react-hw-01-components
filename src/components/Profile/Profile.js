import {Card, InfoContainer, Name, Tag, Location, List, Item, Label, Quantity } from './Profile.styled'
import PropTypes from 'prop-types';

export const Profile = ({users: {username, tag, location, avatar, stats: {followers, views, likes} }}) => {
    return <Card class="profile">
    <InfoContainer class="description">
      <img
        src={avatar}
        alt={username}
        class="avatar"
        width="200"
      />
      <Name  class="name">{username}</Name >
      <Tag class="tag">{tag}</Tag>
      <Location class="location">{location}</Location>
    </InfoContainer>
  
    <List class="stats">
      <Item>
        <Label class="label">Follower</Label>
        <Quantity class="quantity">{followers}</Quantity>
      </Item>
      <Item>
        <Label class="label">Views</Label>
        <Quantity class="quantity">{views}</Quantity>
      </Item>
      <Item>
        <Label class="label">Likes</Label>
        <Quantity class="quantity">{likes}</Quantity>
      </Item>
    </List>
  </Card>
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};