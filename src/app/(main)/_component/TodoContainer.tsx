import React from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';

import styles from './TodoContainer.module.css';

const cx = classNames.bind(styles);

export default function TodoContainer() {
  return (
    <article className={cx('wrap')}>
      <section className={cx('header')}>
        <div className={cx('title')}>
          <span>To-Do List</span>
          <Image src="/images/icon.png" alt="note" width={32} height={32} />
        </div>
      </section>
      <section className={cx('contents')}>Body</section>
    </article>
  );
}
