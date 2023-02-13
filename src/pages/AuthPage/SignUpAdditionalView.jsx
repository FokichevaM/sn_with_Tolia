import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.scss';

const SignUpAdditionalView = () => {
  return (
    <div>
      <div className="title">Additional information</div>
      <form>
        <span class="custom-text-input">
          <textarea onfocus="clearContents(this);">Bio</textarea>
        </span>

        <span class="custom-text-input">
          <input type={'text'} required placeholder="Enter password" />
          <span class="floating-label">Social Media URL #1</span>
        </span>

        <span class="custom-text-input">
          <input type={'text'} required placeholder="Enter password" />
          <span class="floating-label">Social Media URL #2</span>
        </span>

        <span class="custom-text-input">
          <input type={'text'} required placeholder="Enter password" />
          <span class="floating-label">Social Media URL #3</span>
        </span>

        <button>CONTINUE</button>
      </form>
      <div className="footer-question-box">
        You already have an account? &nbsp; &nbsp;
        <Link to="/login">Log in!</Link>
      </div>
    </div>
  );
};

export default SignUpAdditionalView;
