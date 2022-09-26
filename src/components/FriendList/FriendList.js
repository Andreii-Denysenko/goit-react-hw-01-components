import {ContainerFriends, List, Item, Status } from './FriendList.styled'
import PropTypes from 'prop-types';
export const FriendList = ({friends})=> {
return <ContainerFriends>
<List className="friend-list">
{friends.map(friend => <Item className="item" key={friend.id}>
  <Status selected={friend.isOnline} className="status"></Status>
  <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
  <p className="name">{friend.name}</p>
</Item>
)}
</List>
</ContainerFriends>
};


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
        )}