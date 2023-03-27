import React, { useState, useCallback } from 'react';

import { hashtags, HASHTAGS_DEFAULT_COUNT } from './constants';

import './RightSidebar.scss';

const RightSidebar = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleIsShowMore = useCallback(() => {
    setIsShowMore(!isShowMore);
  }, [isShowMore]);

  return (
    <div className="right-sidebar">
      <span className="custom-text-input">
        <input placeholder="Search Teamder"></input>
        <span className="floating-label">Search Teamder</span>
      </span>
      <div className="hashtags-wrapper">
        <div className="hashtag-row">Hashtags for you</div>
        <div>
          {hashtags
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
        <div className="hashtag-row">
          <button onClick={toggleIsShowMore} className="link">
            Show {isShowMore ? 'less' : 'more'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
