import PropTypes from 'prop-types';

export default function Profile({ avatar, name, tag, location,  stats }) { 
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
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
                </li>
                <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
            followers: PropTypes.number,
            views: PropTypes.number,
            likes: PropTypes.number,
        }),
};

Profile.defaultProps = {
    stats: PropTypes.objectOf(
        PropTypes.shape({
            followers: 0,
            views: 0,
            likes: 0,
        }),
    ),
};