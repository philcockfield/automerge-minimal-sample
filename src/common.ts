import type * as t from './types';
export { type t };

/**
 * Libs
 */
export { next as A } from '@automerge/automerge';

/**
 * Constants
 */
export const COLORS = {
  BLACK: '#000',
  WHITE: '#fff',
  DARK: '#293042', // Inky blue/black.
  CYAN: '#00C2FF',
  MAGENTA: '#FE0064',
  BLUE: '#4D7EF7',
} as const;

/**
 * Styles
 */
const absolute: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};
export const Styles = { absolute } as const;
