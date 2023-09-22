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
