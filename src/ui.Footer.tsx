import { type t } from './common';
import { Link } from './ui.Buttons';

const URL = {
  repo: 'https://github.com/philcockfield/automerge-minimal-sample',
  quickstart: 'https://automerge.org/docs/quickstart/',
};

export type FooterProps = {
  style?: t.Styles;
};

export const Footer: React.FC<FooterProps> = (props) => {
  const styles = {
    base: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
    },
  };

  return (
    <div style={styles.base}>
      <Link
        href={URL.repo}
        label={`github: ${URL.repo.substring(URL.repo.lastIndexOf('/') + 1)}`}
      />
      <div />
      <Link href={URL.quickstart} label={`docs/quickstart`} />
    </div>
  );
};
