import { IconButton } from '../icon';
import { ShortArrow } from '../../svg/short-arrow';
import { css, cx } from '@emotion/css';
import { ArrowBtnProps } from '../types';

const styles = css`
  border-color: transparent;
  background: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const ArrowButton = (props: ArrowBtnProps) => {
  const {
    iconSize,
    buttonSize,
    direction,
    style,
    className = '',
    ...rest
  } = props;
  return (
    <IconButton
      buttonSize={buttonSize}
      iconSize={iconSize}
      style={style}
      className={cx(styles, className)}
      {...rest}
    >
      <ShortArrow direction={direction} />
    </IconButton>
  );
};
