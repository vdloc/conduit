import classNames from 'classnames';
import FavoriteFeed from 'components/Feed/FavoriteFeed';
import UserFeed from 'components/Feed/UserFeed';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { selectCurrentUser } from 'redux/slices/user/userSlice';
import {
  useFollowUserMutation,
  useGetUserProfileQuery,
  useUnfollowUserMutation,
} from 'services/api';

export default function ProfilePage() {
  const history = useHistory();
  const currentUser = useSelector(selectCurrentUser);
  const { state: navigationState = {} } = useLocation();
  const {
    user: { offset: userFeedOffset = 0 } = {},
    favorite: { offset: favoriteFeedOffset = 0 } = {},
    activeTab = 0,
  } = navigationState || {};
  const { username } = useParams();
  const { data: profileData } = useGetUserProfileQuery(username);
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();
  const { profile = {} } = profileData || {};

  function handleFavoriteFeedPagination(pageId) {
    history.push({
      state: {
        ...navigationState,
        favorite: { offset: pageId - 1 },
      },
    });
  }

  function handleUserFeedPagination(pageId) {
    history.push({
      state: {
        ...navigationState,
        user: { offset: pageId - 1 },
      },
    });
  }

  async function handleFollowUser() {
    try {
      await followUser(username);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUnfollowUser() {
    try {
      await unfollowUser(username);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='profile-page'>
      {profile ? (
        <div className='user-info'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12 col-md-10 offset-md-1'>
                <img
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
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-10 offset-md-1'>
            <div className='articles-toggle'>
              <ul className='nav nav-pills outline-active'>
                <li className='nav-item'>
                  <Link
                    className={classNames('nav-link', {
                      active: activeTab === 0,
                    })}
                    to={{
                      state: {
                        ...navigationState,
                        activeTab: 0,
                      },
                    }}
                  >
                    My Articles
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className={classNames('nav-link', {
                      active: activeTab === 1,
                    })}
                    to={{
                      state: {
                        ...navigationState,
                        activeTab: 1,
                      },
                    }}
                  >
                    Favorited Articles
                  </Link>
                </li>
              </ul>
              {activeTab === 1 ? (
                <FavoriteFeed
                  username={username}
                  offset={favoriteFeedOffset}
                  onPageClick={handleFavoriteFeedPagination}
                />
              ) : (
                <UserFeed
                  username={username}
                  offset={userFeedOffset}
                  onPageClick={handleUserFeedPagination}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
