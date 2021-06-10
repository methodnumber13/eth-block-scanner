import { css, cx } from '@emotion/css';
import { BasicButtonProps } from '../types';

const defaultBtn = css`
  cursor: pointer;
  outline: none;
  .disabled {
    pointer-events: none;
    opacity: 0.2;
  }
`;

export const Button = (props: BasicButtonProps) => {
  const { children, disabled, style, className = '', size, ...rest } = props;

  return (
    <button className={cx(defaultBtn, disabled, className)} {...rest}>
      {children}
    </button>
  );
};
