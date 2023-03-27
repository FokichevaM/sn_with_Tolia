import React from 'react';
import CustomScrollbar from '../../../components/common/CustomScrollbar';

import FooterQuestionBox from '../FooterQuestionBox';

import { interests } from '../constants';

const Interests = () => {
  return (
    <>
      <div className="title">Interests</div>
      <CustomScrollbar className="interests-scrollbar">
        <form>
          {interests.map((interest, idx) => {
            return (
              <div className="checkbox-label" key={`interests-${idx}`}>
                <input type="checkbox" name={interest} />
                <label>{interest}</label>
              </div>
            );
          })}
        </form>
      </CustomScrollbar>
      <button type="submit">SIGN UP!</button>
      <div>
        <FooterQuestionBox />
      </div>
    </>
  );
};

export default Interests;
