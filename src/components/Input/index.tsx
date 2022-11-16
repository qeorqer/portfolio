import React, { Dispatch, SetStateAction } from 'react';

type propsType = {
  placeholder: string;
  type: 'text' | 'email';
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
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
}) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`py-1.5 px-2.5 rounded mb-5 border-2 transition transition-300 text-black hover:border-emerald-500 active:border-emerald-500 focus:border-emerald-500 ${className}`}
    required={required}
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
);

Input.defaultProps = {
  className: '',
  required: false,
};

export default Input;
