import classNames from 'classnames/bind';

import styles from './layout.module.css';

const cx = classNames.bind(styles);

export default function Page() {
  return <section className={cx('container')} />;
}
