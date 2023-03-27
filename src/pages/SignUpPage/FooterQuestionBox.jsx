import React from 'react';
import { Link } from 'react-router-dom';

const FooterQuestionBox = () => (
  <div className="footer-question-box">
    You already have an account? &nbsp; &nbsp;
    <Link to="/login">Log in!</Link>
  </div>
);

export default FooterQuestionBox;
