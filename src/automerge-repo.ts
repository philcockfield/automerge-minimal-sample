import { isValidAutomergeUrl, Repo } from '@automerge/automerge-repo';
import { BroadcastChannelNetworkAdapter } from '@automerge/automerge-repo-network-broadcastchannel';
import { IndexedDBStorageAdapter } from '@automerge/automerge-repo-storage-indexeddb';
import { A, type t } from './common';

/**
 * Create repo.
 * https://automerge.org/docs/quickstart
 */
const repo = new Repo({
  // network: [],
  network: [new BroadcastChannelNetworkAdapter()],
  storage: new IndexedDBStorageAdapter(),
});

/**
 * Dummy router
 */
const rootDocUrl = `${document.location.hash.substring(1)}`;
let handle: t.DocHandle<t.Doc> | undefined;

const createDoc = () => {
  const doc = repo.create<t.Doc>();
  doc.change((d) => (d.count = new A.Counter()));
  return doc;
};

handle = isValidAutomergeUrl(rootDocUrl) ? repo.find<t.Doc>(rootDocUrl) : createDoc();
console.info('handle', handle);

await handle.whenReady();

console.info('ready');

const docUrl = handle?.url;
document.location.hash = handle?.url; // NB: transient state.

/**
 * API
 */
export const Sample = {
  repo,
  handle,
  docUrl,
} as const;
