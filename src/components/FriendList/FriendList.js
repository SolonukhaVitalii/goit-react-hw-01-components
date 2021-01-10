import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem
                        isOnline={friend.isOnline}
                        avatar={friend.avatar}
                        name={friend.name}
                    />
                </li>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.boolean,
        avatar: PropTypes.string,
        name: PropTypes.string,
        }),
    ),
};