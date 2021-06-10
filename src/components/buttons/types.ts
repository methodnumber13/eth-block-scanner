import { ButtonHTMLAttributes, CSSProperties, ReactElement } from 'react';

export type ButtonSize = 's' | 'm' | 'l' | 'xl';

export type ExternalIconCSSProps = {
  '--icon-size'?: string;
  '--button-cursor'?: string;
};

export type ExtCSSProps = CSSProperties & ExternalIconCSSProps;

export type IconProps = {
  className?: string;
  children: ReactElement;
  iconSize?: Size;
  iconColor?: string;
  style?: ExtCSSProps;
};

export type Size = 'xxs' | 'xs' | 's' | 'm' | 'l';

export type Direction = 'left' | 'right' | 'top' | 'bottom';

export type BasicButtonProps = {
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type IconButtonProps = {
  iconSize?: Size;
  style?: CSSProperties;
  className?: string;
  buttonSize?: ButtonSize;
} & IconProps &
  Omit<BasicButtonProps, 'size'>;

export type ArrowBtnProps = {
  direction?: Direction;
  children?: ReactElement;
} & Omit<IconButtonProps, 'children'>;

export type ObjectMap<Map extends string, V> = { [K in Map]: V };
