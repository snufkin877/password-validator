/* eslint-disable prefer-destructuring */
/* eslint react/prop-types: 0 */
import React, { useState } from 'react';
import './validation-feedback.scss';
import classNames from 'classnames';

export const ValidationFeedback = (props) => {

	const { 
		selectedPassword, 
		confirmedPassword, 
		isPasswordLengthValid,
		arePasswordsMatch,
		isPasswordHasUppercaseChar,
		isPasswordHasLowercaseChar,
		isPasswordHasNumber,
		isPasswordHasSpecialChar,
	} = props;

  return (
		<>
			{
				(selectedPassword || confirmedPassword) && (
					<div className="validations-feedback-container">
						<div
							className={classNames({
								'feedback-string': true,
								'valid-string': isPasswordLengthValid,
								})}
						>
							Password must be at least 6 characters long.
						</div>

						<div
							className={classNames({
								'feedback-string': true,
								'valid-string': arePasswordsMatch,
								})}
						>
							Passwords must match.
						</div>

						<div
							className={classNames({
								'feedback-string': true,
								'valid-string': isPasswordHasUppercaseChar,
								})}
						>
							Password must have at least 1 uppercase character.
						</div>

						<div
							className={classNames({
								'feedback-string': true,
								'valid-string': isPasswordHasLowercaseChar,
								})}
						>
							Password must have at least 1 lowercase character.
						</div>

						<div
							className={classNames({
								'feedback-string': true,
								'valid-string': isPasswordHasNumber,
								})}
						>
							Password must have at least 1 number.
						</div>

						<div
							className={classNames({
								'feedback-string': true,
								'valid-string': isPasswordHasSpecialChar,
								})}
						>
							Password must have at least 1 special character.
						</div>

					</div>
				)
			}
		</>

  );
};