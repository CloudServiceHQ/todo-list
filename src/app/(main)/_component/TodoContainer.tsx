import React from 'react';
import classNames from 'classnames/bind';

import styles from './TodoContainer.module.css';

const cx = classNames.bind(styles);

export default function TodoContainer() {
  return (
    <article className={cx('wrap')}>
      <section className={cx('header')}>Header</section>
      <section className={cx('contents')}>Contents</section>
    </article>
  );
}
