/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectHomePageActiveTabId,
  setHomePageActiveTabId,
  setTagName,
} from 'redux/slices/settingSlice';
import { useGetTagsQuery } from 'services/api';

export default function TagLinks() {
  const dispatch = useDispatch();
  const activeTabId = useSelector(selectHomePageActiveTabId);
  const { data: { tags } = {} } = useGetTagsQuery();

  function handleTabClick(tag) {
    return function (e) {
      e.preventDefault();
      dispatch(setTagName(tag));

      if (activeTabId !== 2) {
        dispatch(setHomePageActiveTabId(2));
      }
    };
  }

  return (
    <div className='tag-list'>
      {tags && tags.length
        ? tags.map((tag, id) => (
            <a
              href=''
              key={id}
              className='tag-pill tag-default'
              onClick={handleTabClick(tag)}
            >
              {tag}
            </a>
          ))
        : ''}
    </div>
  );
}
