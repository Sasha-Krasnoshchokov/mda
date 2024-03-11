import React from 'react';

import './common.styles.css';

interface IProps {
  id?: string;
  text: string;
  callback: (e?: React.MouseEvent) => void;
}

const Button: React.FC<IProps> = ({ id = 'button', text, callback }) => (
  <button
    id={id}
    type="button"
    className="button"
    onClick={callback}
  >
    {text}
  </button>
);

export default Button;
