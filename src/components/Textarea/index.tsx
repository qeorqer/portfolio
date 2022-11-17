import React, { Dispatch, SetStateAction } from 'react';

import * as styles from './style.module.css';

type propsType = {
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  className?: string;
  required?: boolean;
  isValid?: boolean;
};

const Textarea: React.FC<propsType> = ({
  placeholder,
  className,
  required,
  isValid,
  value,
  setValue,
}) => (
  <textarea
    placeholder={placeholder}
    className={[styles.input, className, !isValid && styles.error].join(' ')}
    required={required}
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
);

Textarea.defaultProps = {
  className: '',
  required: false,
  isValid: true,
};

export default Textarea;
