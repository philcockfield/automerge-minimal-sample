import React from 'react';
import ReactDOM from 'react-dom/client';
import { RepoContext } from '@automerge/automerge-repo-react-hooks';

import { Sample } from './automerge-repo.ts';
import { App } from './ui.App.tsx';

/**
 * Render
 */
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RepoContext.Provider value={Sample.repo}>
      <App docUrl={Sample.docUrl} />
    </RepoContext.Provider>
  </React.StrictMode>,
);
