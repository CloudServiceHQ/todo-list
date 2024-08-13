'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';

import TaskInput from './TaskInput';
import { ITodo } from './TodoItem';
import TodoList from './TodoList';

import styles from './TodoContainer.module.css';

const cx = classNames.bind(styles);

/**
 * Todo Container Wrapper
 */
export default function TodoContainer() {
  // todo list 목록
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  // ADD 버튼 이벤트 handler
  const handleAddTodoList = (task: string) => {
    if (todoList.findIndex(item => item.text === task) >= 0) {
      return { isSuccess: false, message: '중복된 값이 있습니다.' };
    }

    setTodoList(prev => [...prev, { id: uuidv4(), text: task }]);
    return { isSuccess: true };
  };

  // 삭제 버튼 이벤트 handler
  const handleChangeTodoList = (id: string) => {
    setTodoList(prev => prev.filter(item => item.id !== id));
  };

  return (
    <article className={cx('wrap')}>
      <section className={cx('header')}>
        <div className={cx('title')}>
          <span>To-Do List</span>
          <Image src="/images/icon.png" alt="note" width={32} height={32} />
        </div>
        <TaskInput onClick={task => handleAddTodoList(task)} />
      </section>
      <section className={cx('contents')}>
        <TodoList todoList={todoList} onDelete={id => handleChangeTodoList(id)} />
      </section>
    </article>
  );
}
