import React from 'react';
import PropTypes from 'prop-types';

function Profile({ avatar, name, tag, location,  stats }) { 
    return (
        <div className="profile">
            <div className="description">
                <img
                src={avatar}
                alt="Аватар пользователя"
                className="avatar"
                />
                <p className="name">{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>
            <ul className="stats">
                <li>
                <span className="label">
                    {Object.keys(stats)[0].slice(0, 1).toLocaleUpperCase() +
                    Object.keys(stats)[0].slice(1).toLocaleLowerCase()}
                    :
                </span>
                <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                <span className="label">Views:</span>
                <span className="quantity">{stats.views}</span>
                </li>
                <li>
                <span className="label">Likes:</span>
                <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.number.isRequired,
};

Profile.defaultProps = {
    avatar:
        "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            followers: 0,
            views: 0,
            likes: 0,
        }))
};
  
export default Profile;