import { FC } from 'react';

type IDefaultProps = {
  testId?: string;
  className?: string;
};

declare module 'react' {
  export interface IComponent<T = {}> extends FC<IDefaultProps & T> {}
}
