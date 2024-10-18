/* eslint-disable prefer-destructuring */
/* eslint react/prop-types: 0 */
import React, { useState, useEffect } from 'react';
import './main-container.scss';
import { Button } from 'antd';
import { PasswordInput } from './components/password-inupt/PasswordInput';
import { ValidationFeedback } from './components/validation-feedback/ValidationFeedback';

export const MainContainer = () => {

  const [selectedPassword, setSelectedPassword] = useState(null);
  const [confirmedPassword, setConfirmedPassword] = useState(null);

  // validations states
  const [arePasswordsMatch, setArePasswordsMatch] = useState(false);
  const [isPasswordLengthValid, setIsPasswordLengthValid] = useState(false);
  const [isPasswordHasUppercaseChar, setIsPasswordHasUppercaseChar] = useState(false);
  const [isPasswordHasLowercaseChar, setIsPasswordHasLowercaseChar] = useState(false);
  const [isPasswordHasNumber, setIsPasswordHasNumber] = useState(false);
  const [isPasswordHasSpecialChar, setIsPasswordHasSpecialChar] = useState(false);

  const [isSubmitButtonEnabled, setIsSubmitButtonEnabled] = useState(false);

  const onSubmitClick = () => {
    alert('Password successfully changed');
  }

  // validations functions
  const testPasswordsMatch = () => setArePasswordsMatch(selectedPassword === confirmedPassword);
  const testPasswordLengthValid = () => setIsPasswordLengthValid(selectedPassword && selectedPassword.length >= 6);
  const testPasswordHasUppercaseChar = () => setIsPasswordHasUppercaseChar(/[A-Z]/.test(selectedPassword));
  const testPasswordHasLowercaseChar = () => setIsPasswordHasLowercaseChar(/[a-z]/.test(selectedPassword));
  const testPasswordHasNumber = () => setIsPasswordHasNumber(/\d/.test(selectedPassword));
  const testPasswordHasSpecialChar = () => setIsPasswordHasSpecialChar(/[!@#$%^&*()_\-+=\{\}\[\]|:;"'<,>.]/.test(selectedPassword));

  const validatePasswords = () => {
    testPasswordsMatch();
    testPasswordLengthValid();
    testPasswordHasUppercaseChar();
    testPasswordHasLowercaseChar();
    testPasswordHasNumber();
    testPasswordHasSpecialChar();
  }

  useEffect(() => {
    if (selectedPassword || confirmedPassword) {
      validatePasswords();
    }
  }, [selectedPassword, confirmedPassword]);

  useEffect(() => {
    setIsSubmitButtonEnabled([arePasswordsMatch, isPasswordLengthValid, isPasswordHasUppercaseChar, isPasswordHasLowercaseChar, isPasswordHasNumber, isPasswordHasSpecialChar].every(stateItem => !!stateItem));
  }, [arePasswordsMatch, isPasswordLengthValid, isPasswordHasUppercaseChar, isPasswordHasLowercaseChar, isPasswordHasNumber, isPasswordHasSpecialChar]);

  return (
    <div className="main-container">
      <div className="password-validator-container">
        <div className="password-validator-header">
          <div className="password-validator-title">
            Password Reset
          </div>

          <div className="password-validator-sub-title">
            Enter your new password for your account.
          </div>
        </div>

        <PasswordInput 
          label="New Password"
          value={selectedPassword}
          onPasswordChange={setSelectedPassword}
        />

        <PasswordInput 
          label="Confirm New Password"
          value={confirmedPassword}
          onPasswordChange={setConfirmedPassword}
        />

        <Button
          onClick={onSubmitClick}
          type="primary"
          className="submit-button"
          disabled={!isSubmitButtonEnabled}
        >
          Change Password
        </Button>

      </div>

      <ValidationFeedback 
      	selectedPassword={selectedPassword}
        confirmedPassword={confirmedPassword}
        isPasswordLengthValid={isPasswordLengthValid}
        arePasswordsMatch={arePasswordsMatch}
        isPasswordHasUppercaseChar={isPasswordHasUppercaseChar}
        isPasswordHasLowercaseChar={isPasswordHasLowercaseChar}
        isPasswordHasNumber={isPasswordHasNumber}
        isPasswordHasSpecialChar={isPasswordHasSpecialChar}
      />

    </div>

  );
};