import React, { useState } from 'react';

import FooterQuestionBox from '../FooterQuestionBox';

const BasicInformation = ({ goToNamedStep }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const goAdditional = () => goToNamedStep('additional');

  const isValid = !!email.length && !!password.length && !!name.length;

  return (
    <>
      <div className="title">Basic information</div>
      <form>
        <span className="custom-text-input">
          <input
            onChange={(e) => setEmail(e.currentTarget.value)}
            type={'email'}
            placeholder="Enter password"
            required
          />
          <span className="floating-label">E-mail</span>
        </span>

        <div className="horizontal-input-box">
          <span className="custom-text-input">
            <input
              onChange={(e) => setName(e.currentTarget.value)}
              type={'text'}
              placeholder="-"
              required
            />
            <span className="floating-label">Name</span>
          </span>

          <span className="custom-text-input">
            <input type={'text'} required placeholder="Enter password" />
            <span className="floating-label">Surname</span>
          </span>
        </div>

        <span className="custom-text-input">
          <input
            onChange={(e) => setPassword(e.currentTarget.value)}
            type={'password'}
            placeholder="Enter password"
            required
          />
          <span className="floating-label">Password</span>
        </span>

        <div className="horizontal-input-box">
          <span className="custom-text-input city">
            <input type={'text'} required placeholder="Enter password" />
            <span className="floating-label">City</span>
          </span>

          <span className="custom-text-input age">
            <input type={'number'} required placeholder="Enter password" />
            <span className="floating-label">Age</span>
          </span>
        </div>

        <button onClick={goAdditional} disabled={!isValid}>
          CONTINUE
        </button>
      </form>
      <FooterQuestionBox />
    </>
  );
};

export default BasicInformation;
