import { isValidAutomergeUrl, Repo } from '@automerge/automerge-repo';
import { BroadcastChannelNetworkAdapter } from '@automerge/automerge-repo-network-broadcastchannel';
import { IndexedDBStorageAdapter } from '@automerge/automerge-repo-storage-indexeddb';
import { A, type t } from './common';

/**
 * Create repo.
 * https://automerge.org/docs/quickstart
 */
const repo = new Repo({
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

if (isValidAutomergeUrl(rootDocUrl)) {
  handle = repo.find<t.Doc>(rootDocUrl);
} else {
  handle = createDoc();
}

await handle.whenReady();

const docUrl = (document.location.hash = handle?.url);
(window as any).handle = handle; // we'll use this later for experimentation

/**
 * API
 */
export const Sample = {
  repo,
  get handle() {
    return handle;
  },
} as const;
