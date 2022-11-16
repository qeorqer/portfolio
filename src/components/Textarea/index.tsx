import React, { Dispatch, SetStateAction } from 'react';

type propsType = {
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  className?: string;
  required?: boolean;
};

const Textarea: React.FC<propsType> = ({
  placeholder,
  className,
  required,
  value,
  setValue,
}) => (
  <textarea
    placeholder={placeholder}
    className={`py-1.5 px-2.5 rounded mb-5 border-2 transition transition-300 text-black hover:border-emerald-500 active:border-emerald-500 focus:border-emerald-500 ${className}`}
    required={required}
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
);

Textarea.defaultProps = {
  className: '',
  required: false,
};

export default Textarea;
