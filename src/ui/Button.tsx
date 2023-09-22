import { useEffect, useState, useRef } from 'react';

import { COLORS, type t } from '../common';

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const [isDown, setDown] = useState(false);
  const [isOver, setOver] = useState(false);

  const down = (isDown: boolean) => () => setDown(isDown);
  const over = (isOver: boolean) => () => setOver(isOver);

  /**
   * [Render]
   */
  const styles: t.Styles = {
    base: {
      display: 'inline-block',
      userSelect: 'none',
      cursor: 'pointer',
      color: COLORS.BLUE,
      transform: isDown ? 'translateY(1px)' : 'none',
    },
  };

  return (
    <div
      style={{ ...styles.base, ...props.style }}
      onClick={props.onClick}
      onMouseDown={down(true)}
      onMouseUp={down(false)}
      onMouseEnter={over(true)}
      onMouseLeave={over(false)}
    >
      {props.children}
    </div>
  );
};
