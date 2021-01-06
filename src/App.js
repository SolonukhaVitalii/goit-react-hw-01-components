import React from 'react';
import './index.css';
import Profile from './components/Profile';
import user from './user.json';
import Statistics from './components/Statistics';
import statisticalAray from './statistical-data.json';
import FriendList from './components/FriendList';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory';
import transactions from './transactions.json';

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

      <UploadStats title="Upload stats">
        {statisticalAray.map((s) => (
          <Statistics key={s.id} label={s.label} percentage={s.percentage} />
      ))}
      </UploadStats>

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}