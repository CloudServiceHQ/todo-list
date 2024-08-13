'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Feedback from '@app/_component/Feedback';

import styles from './TaskInput.module.css';

const cx = classNames.bind(styles);

interface IResponse {
  isSuccess: boolean;
  message?: string;
}

interface IProps {
  onClick: (value: string) => IResponse;
}

/**
 * 상단 Todo 입력 영역
 * @param onClick ADD 버튼 클릭 이벤트 handler
 */
export default function TaskInput({ onClick }: IProps) {
  const [task, setTask] = useState<string>('');
  const [error, setError] = useState<string | undefined>();

  const handleClick = (value: string) => {
    if (value) {
      const res = onClick(value);

      if (!res.isSuccess) {
        setError(res.message);
      } else {
        setError(undefined);
        setTask('');
      }
    }
  };

  useEffect(() => {
    setError(undefined);
  }, [task]);

  return (
    <div className={cx('search-wrapper')}>
      <div className={cx('search')}>
        <input placeholder="Add your task" value={task} onChange={e => setTask(e.currentTarget.value)} />
        <button
          className={cx('button-item')}
          onClick={() => handleClick(task)}
          disabled={task === '' || error !== undefined}
        >
          ADD
        </button>
      </div>
      {error && <Feedback text={error} type="error" />}
    </div>
  );
}
