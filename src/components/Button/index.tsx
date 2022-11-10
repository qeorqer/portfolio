import React from 'react';

import * as styles from './style.module.css';

type propsType = {
  text: string;
  onClick: () => void;
  customStyles?: string;
};

const Button: React.FC<propsType> = ({ text, onClick, customStyles }) => (
  <button
    onClick={onClick}
    className={`border-emerald-500 px-3 py-1 border rounded-lg capitalize text-lg ${styles.button} transition-all duration-500 ease-in-out ${customStyles}`}
    type="button"
  >
    <span>{text}</span>
  </button>
);

Button.defaultProps = {
  customStyles: '',
};

export default Button;
