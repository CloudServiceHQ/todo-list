import React from 'react';
import classNames from 'classnames/bind';

import TodoItem, { ITodo } from './TodoItem';

import styles from './TodoList.module.css';

const cx = classNames.bind(styles);

interface IProps {
  todoList: ITodo[];
  onDelete: (id: string) => void;
}

/**
 * Todo 목록
 * @param todoList Todo Item 목록
 * @param onDelete X 버튼 클릭 handler
 */
export default function TodoList({ todoList, onDelete }: IProps) {
  return (
    <ul className={cx('list')}>
      {todoList.map(item => (
        <li key={item.id}>
          <TodoItem id={item.id} text={item.text} onDelete={() => onDelete(item.id)} />
        </li>
      ))}
    </ul>
  );
}
