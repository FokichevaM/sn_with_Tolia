import React, { useState, useCallback } from 'react';

import { hashtags, HASHTAGS_DEFAULT_COUNT } from './constants';

import './RightSidebar.scss';

const RightSidebar = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [value, setValue] = useState('');

  const toggleIsShowMore = useCallback(() => {
    setIsShowMore(!isShowMore);
  }, [isShowMore]);

  const filteredHashtags = hashtags.filter((hashtag) => {
    return hashtag.name.toLowerCase().includes(value.toLowerCase());
  });

  const isNoFound = !!value && !filteredHashtags.length;

  return (
    <div className="right-sidebar">
      <span className="custom-text-input">
        <input
          type="text"
          placeholder="Search Teamder"
          onChange={(event) => setValue(event.target.value)}
        ></input>
        <span className="floating-label">Search Teamder</span>
      </span>
      <div className="hashtags-wrapper">
        <div className="hashtag-row header">Hashtags for you</div>
        {isNoFound ? (
          <span className="hashtag-row">No hashtags found</span>
        ) : (
          <div className="hashtags">
            {filteredHashtags
              .slice(0, isShowMore ? hashtags.length : HASHTAGS_DEFAULT_COUNT)
              .map((hashtag, idx) => {
                return (
                  <div className="hashtag hashtag-row" key={`hashtags-${idx}`}>
                    <span>#{hashtag.name}</span>
                    <span>{hashtag.followersCount} Teams</span>
                  </div>
                );
              })}
          </div>
        )}
        {filteredHashtags.length <= HASHTAGS_DEFAULT_COUNT ? null : (
          <div className="hashtag-row">
            <button onClick={toggleIsShowMore} className="link">
              Show {isShowMore ? 'less' : 'more'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSidebar;
