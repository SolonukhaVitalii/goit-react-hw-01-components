import React from 'react';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
    return (
        <ul>
            {friends.map(friend => (
                <li key={friend.id}>
                    <span>
                    </span>
                    <img />
                    <p>friend.name</p>
                </li>
            ))}
        </ul>
    )
};



FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.string.isRequired,
        })
    ).isRequired,
};

FriendList.defaultProps = {

};




export default FriendList;