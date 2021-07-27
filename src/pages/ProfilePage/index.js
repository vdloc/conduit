import Profile from 'features/profile/Profile';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProfilePage() {
  const { username } = useParams();

  return (
    <div className='profile-page'>
      <Profile username={username} />
    </div>
  );
}
