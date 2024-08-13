import React from 'react';
import classNames from 'classnames/bind';

import styles from './TodoItem.module.css';

const cx = classNames.bind(styles);

export interface ITodo {
  id: string;
  text: string;
}

interface IProps extends ITodo {
  onDelete: () => void;
}

/**
 * Todo 단일요소
 * @param id Todo Item 고유 id
 * @param text Todo Item 문자열
 * @param onDelete X 버튼 클릭 handler
 */
export default function TodoItem({ id, text, onDelete }: IProps) {
  return (
    <div className={cx('item')}>
      <label htmlFor={id} className={cx('checkbox-label')}>
        <input type="checkbox" id={id} />
        <i className={cx('checkbox-image')} />
        <span className={cx('text')}>{text}</span>
      </label>
      <button onClick={onDelete}>
        <i className={cx('icon-close')} />
      </button>
    </div>
  );
}
