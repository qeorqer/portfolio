import React, { Dispatch, SetStateAction } from 'react';

import * as styles from './style.module.css';

type propsType = {
  placeholder: string;
  type: 'text' | 'email';
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  isValid?: boolean;
  className?: string;
  required?: boolean;
};

const Input: React.FC<propsType> = ({
  type,
  placeholder,
  value,
  setValue,
  className,
  required,
  isValid,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    className={[styles.input, className, !isValid && styles.error].join(' ')}
    required={required}
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
);

Input.defaultProps = {
  className: '',
  required: false,
  isValid: true,
};

export default Input;
