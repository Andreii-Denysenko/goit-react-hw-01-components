import {ContainerFriends, List, Item, Status } from './FriendList.styled'
import PropTypes from 'prop-types';
export const FriendList = ({friends})=> {
return <ContainerFriends>
<List class="friend-list">
{friends.map(friend => <Item class="item" key={friend.id}>
  <Status selected={friend.isOnline} class="status"></Status>
  <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
  <p class="name">{friend.name}</p>
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