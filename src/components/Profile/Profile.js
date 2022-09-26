import {Card, InfoContainer, Name, Tag, Location, List, Item, Label, Quantity } from './Profile.styled'
import PropTypes from 'prop-types';

export const Profile = ({users: {username, tag, location, avatar, stats: {followers, views, likes} }}) => {
    return <Card className="profile">
    <InfoContainer className="description">
      <img
        src={avatar}
        alt={username}
        className="avatar"
        width="200"
      />
      <Name  className='name'>{username}</Name >
      <Tag className="tag">{tag}</Tag>
      <Location className="location">{location}</Location>
    </InfoContainer>
  
    <List className="stats">
      <Item>
        <Label className="label">Follower</Label>
        <Quantity className="quantity">{followers}</Quantity>
      </Item>
      <Item>
        <Label className="label">Views</Label>
        <Quantity className="quantity">{views}</Quantity>
      </Item>
      <Item>
        <Label className="label">Likes</Label>
        <Quantity className="quantity">{likes}</Quantity>
      </Item>
    </List>
  </Card>
};

Profile.propTypes = {
  users: PropTypes.shape({
    username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
  })
  
};