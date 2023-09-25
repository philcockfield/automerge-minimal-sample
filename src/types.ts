import type { next as A } from '@automerge/automerge';
export type { DocHandle, AutomergeUrl } from '@automerge/automerge-repo';

/**
 * Local
 */
export type Doc = { count?: A.Counter };
export type Styles = { [key: string]: React.CSSProperties };
