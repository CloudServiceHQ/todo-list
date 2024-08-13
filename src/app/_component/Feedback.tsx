import React from 'react';
import classNames from 'classnames/bind';

import styles from './Feedback.module.css';

type IType = 'error' | 'info' | 'success';

interface IProps {
  text: string;
  type: IType;
}
const cx = classNames.bind(styles);

// 아이콘 및 텍스트 정보 매핑
const getIconMap = (type: IType) => {
  switch (type) {
    case 'error':
      return {
        icon: 'error',
        color: 'red',
      };
    case 'success':
      return {
        icon: 'success',
        color: 'green',
      };
    case 'info':
    default:
      return {
        icon: 'info',
        color: 'gray',
      };
  }
};

/**
 * 성공, 에러 피드백 라벨
 * @param {string} text 문구
 * @param {IType} type 문구 타입
 */
export default function Feedback({ text, type }: IProps) {
  const { icon, color } = getIconMap(type);

  return (
    <div className={cx('wrap')}>
      <i className={cx('icon', icon)} />
      <span className={cx(color)}>{text}</span>
    </div>
  );
}
