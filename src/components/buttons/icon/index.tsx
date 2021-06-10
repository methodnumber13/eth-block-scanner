import { Button } from '../default';
import { Icon } from '../../icon';
import { IconButtonProps } from '../types';

export const IconButton = (props: IconButtonProps) => {
  const {
    iconSize,
    style,
    className,
    children,
    buttonSize,
    disabled,
    ...rest
  } = props;
  return (
    <Button
      className={className}
      style={style}
      disabled={disabled}
      size={buttonSize}
      {...rest}
    >
      <Icon iconSize={iconSize} {...rest}>
        {children}
      </Icon>
    </Button>
  );
};
