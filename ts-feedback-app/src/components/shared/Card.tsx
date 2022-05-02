import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  reverse?: boolean;
}

export const Card: FC<Props> = ({ children, reverse = false }) => {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
};
