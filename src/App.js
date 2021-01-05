import React from 'react';
import './index.css';
import Profile from './components/Profile';
import user from './user.json';
/*import Statistics from './components/Statistics';
import statistical-data from './statistical-data';*/

export default function App() {
  return (
    <div>
     <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}