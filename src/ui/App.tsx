import { useState } from 'react';
import { Button, COLORS, type t } from './common';

export function App(props: { docRef?: t.DocHandle<t.Doc> }) {
  const { docRef } = props;

  const [_, setCount] = useState(0);
  const redraw = () => setCount((prev) => prev + 1);

  const doc = docRef?.docSync();
  const count = doc?.count?.value ?? 0;

  /**
   * Handlers
   */
  const increment = () => {
    docRef?.change((d) => d.count?.increment(1));
    // redraw();
  };

  /**
   * Render
   */
  const styles = {
    base: { padding: 20, color: COLORS.DARK },
  };

  const btn = (label: string, handler: () => void) => {
    return (
      <Button onClick={handler} style={{ marginRight: 12 }}>
        {label}
      </Button>
    );
  };

  return (
    <div style={styles.base}>
      <div>count: {count}</div>
      {btn('increment', increment)}
      {btn('redraw', redraw)}
    </div>
  );
}
