/* eslint-disable prefer-destructuring */
/* eslint react/prop-types: 0 */
import React, { useState } from 'react';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './password-input.scss';

export const PasswordInput = (props) => {

	const { label, value, onPasswordChange } = props;

  return (
		<div className="password-container">
			<div>
				{label}:
			</div>

			<Input.Password
				className="password-input-container"
				iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
				value={value}
				onChange={e => onPasswordChange(e.target.value)}
			/>
		</div>

  );
};