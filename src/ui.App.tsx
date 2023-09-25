import { useDocument } from '@automerge/automerge-repo-react-hooks';
import { COLORS, Styles, type t } from './common';
import { Button } from './ui.Buttons';
import { Footer } from './ui.Footer';

export function App(props: { docUrl?: t.AutomergeUrl }) {
  const [doc, changeDoc] = useDocument<t.Doc>(props.docUrl);

  const increment = () => {
    changeDoc((d) => d.count?.increment(1));
  };

  /**
   * Render
   */
  const styles: t.Styles = {
    base: {
      ...Styles.absolute,
      color: COLORS.DARK,
      fontFamily: 'sans-serif',
      padding: 20,
      lineHeight: 1.4,
      display: 'grid',
      gridTemplateRows: '1fr auto',
    },
  };

  return (
    <div style={styles.base}>
      <div>
        <div>count: {doc?.count?.value ?? 0}</div>
        <Button label={'increment'} onClick={increment} />
      </div>
      <Footer />
    </div>
  );
}
