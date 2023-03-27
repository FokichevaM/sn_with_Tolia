import React from 'react';

import FooterQuestionBox from '../FooterQuestionBox';

const AdditionalInformation = ({ goToNamedStep }) => {
  const goInterests = () => goToNamedStep('interests');

  return (
    <>
      <div className="title">Additional information</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <span className="custom-text-input">
          <textarea type="text" placeholder="-" rows="6" />
          <span className="floating-label">Bio</span>
        </span>

        <span className="custom-text-input">
          <input type={'text'} placeholder="Enter password" />
          <span className="floating-label">Social Media URL #1</span>
        </span>

        <span className="custom-text-input">
          <input type={'text'} placeholder="Enter password" />
          <span className="floating-label">Social Media URL #2</span>
        </span>

        <span className="custom-text-input">
          <input type={'text'} placeholder="Enter password" />
          <span className="floating-label">Social Media URL #3</span>
        </span>

        <button type="submit" onClick={goInterests}>
          CONTINUE
        </button>
      </form>
      <FooterQuestionBox />
    </>
  );
};

export default AdditionalInformation;
