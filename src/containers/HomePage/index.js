import React from 'react';
import Feed from 'components/Feed';
import TagsList from 'components/Tag/TagLinks';

export default function Home() {
  return (
    <div className='home-page'>
      <div className='banner'>
        <div className='container'>
          <h1 className='logo-font'>conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className='container page'>
        <div className='row'>
          <div className='col-md-9'>
            <Feed />
          </div>

          <div className='col-md-3'>
            <div className='sidebar'>
              <p>Popular Tags</p>
              <TagsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
