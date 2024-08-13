import classNames from 'classnames/bind';

import styles from './layout.module.css';

const cx = classNames.bind(styles);

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={cx('wrap')}>{children}</div>;
}
