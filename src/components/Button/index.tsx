import React from 'react';

type propsType = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<propsType> = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="border-emerald-500 px-3 py-1 border rounded-lg capitalize text-lg"
  >
    {text}
  </button>
);

export default Button;
