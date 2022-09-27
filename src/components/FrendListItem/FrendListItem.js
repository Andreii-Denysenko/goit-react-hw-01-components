import { Item, Status, Avatar } from '../FrendListItem/FrendsListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({avatar, isOnline, name,id})=> {
    return (
    <Item className="item" key={id}>
      <Status selected={isOnline} className="status"></Status>
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Item>
    )
    };
    
    
    FriendListItem.propTypes = {
        friends: PropTypes.arrayOf(
          PropTypes.shape({
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
          })
            )};