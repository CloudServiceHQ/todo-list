import classNames from 'classnames/bind';

import TodoContainer from './_component/TodoContainer';

import styles from './layout.module.css';

const cx = classNames.bind(styles);

export default function Page() {
  return (
    <section className={cx('container')}>
      <TodoContainer />
    </section>
  );
}
