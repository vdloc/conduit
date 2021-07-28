import Avatar from 'components/Avatar';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCurrentUser } from 'store/slices/userSlice';
import {
  useFollowUserMutation,
  useGetUserProfileQuery,
  useUnfollowUserMutation,
} from 'services/api';
import ProfileBannerPlaceholder from './ProfileBannerPlaceholder';

export default function ProfileBanner({ username }) {
  const currentUser = useSelector(selectCurrentUser);
  const { data: profile, isFetching } = useGetUserProfileQuery(username);
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();

  async function handleFollowUser() {
    await followUser(username);
  }

  async function handleUnfollowUser() {
    await unfollowUser(username);
  }

  return (
    <div className='user-info'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-10 offset-md-1'>
            {isFetching ? (
              <ProfileBannerPlaceholder />
            ) : profile ? (
              <>
                <Avatar
                  src={profile.image}
                  className='user-img'
                  alt={profile.username}
                />
                <h4>{profile.username}</h4>
                <p>{profile.bio}</p>
                {currentUser?.username === username ? (
                  <Link
                    className='btn btn-sm btn-outline-secondary action-btn'
                    to='/setting'
                  >
                    <i className='ion-gear-a'></i>
                    &nbsp; Edit Profile Settings
                  </Link>
                ) : (
                  <button
                    className='btn btn-sm btn-outline-secondary action-btn'
                    onClick={
                      profile.following ? handleUnfollowUser : handleFollowUser
                    }
                  >
                    {profile.following ? (
                      <>
                        <i className='ion-minus-round'></i>
                        &nbsp;Unfollow
                      </>
                    ) : (
                      <>
                        <i className='ion-plus-round'></i>
                        &nbsp; Follow
                      </>
                    )}
                    {profile.username}
                  </button>
                )}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
