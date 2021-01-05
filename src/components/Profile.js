import React from 'react';
import PropTypes from 'prop-types';

function Profile({ name, tag, location, avatar, stats }) { 
    return (
        <div class="profile">
            <div class="description">
                <img
                src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
                alt="Аватар пользователя"
                class="avatar"
                />
                <p class="name">{name}</p>
                <p class="tag">{tag}</p>
                <p class="location">{location}</p>
            </div>
            <ul class="stats">{stats}
                <li>
                <span class="label">Followers</span>
                <span class="quantity">1000</span>
                </li>
                <li>
                <span class="label">Views</span>
                <span class="quantity">2000</span>
                </li>
                <li>
                <span class="label">Likes</span>
                <span class="quantity">3000</span>
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
}


export default Profile;