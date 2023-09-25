import { useState } from 'react';
import { COLORS, type t } from './common';

/**
 * Simple pressable button.
 */
export type ButtonProps = {
  children?: React.ReactNode;
  label?: string;
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const [isDown, setDown] = useState(false);
  const [isOver, setOver] = useState(false);

  const down = (isDown: boolean) => () => setDown(isDown);
  const over = (isOver: boolean) => () => setOver(isOver);

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
      {props.label}
      {props.children}
    </div>
  );
};

/**
 * Simple <a> link.
 */
export type LinkProps = {
  href?: string;
  label?: React.ReactNode;
  style?: t.Styles;
};
export const Link: React.FC<LinkProps> = (props) => {
  const { href } = props;
  const label = props.label ?? href;
  const styles: t.Styles = { link: { textDecoration: 'none' } };
  return (
    <a
      href={href}
      style={{ ...props.style, ...styles.link }}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >
      {label}
    </a>
  );
};
