import { List} from './FriendList.styled'
import PropTypes from 'prop-types';
import { FriendListItem } from '../FrendListItem/FrendListItem';


export const FriendList = ({friends}) => {
return (
<List>
{friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
))}
  </List>
)
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};