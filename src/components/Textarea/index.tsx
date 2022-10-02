import React from 'react';

type propsType = {
  placeholder: string;
  className?: string;
};

const Textarea: React.FC<propsType> = ({ placeholder, className }) => (
  <textarea
    placeholder={placeholder}
    className={`py-1.5 px-2.5 rounded mb-5 border-2 transition transition-300 text-black hover:border-emerald-500 active:border-emerald-500 focus:border-emerald-500 ${className}`}
  />
);

export default Textarea;
