import { ReactNode } from 'react';

export interface HeaderProps {
  title: string;
}

export interface WithErrorProps {
  message?: string;
  isVisible?: boolean;
  type?: 'warning' | 'error';
  children: ReactNode;
}

export interface BasicComponentProps {
  className?: string;
  children?: ReactNode;
}
