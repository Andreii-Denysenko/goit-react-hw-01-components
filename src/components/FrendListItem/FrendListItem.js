import { Item, Status, Avatar } from '../FrendListItem/FrendsListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({avatar, isOnline, name,})=> {
    return (
    <Item className="item">
      <Status selected={isOnline} className="status"></Status>
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Item>
    )
    };
    
    
    FriendListItem.propTypes = {
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
          };