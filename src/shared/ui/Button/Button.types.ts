import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from 'react';

type ButtonNativeProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  href?: never;
};

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonTheme = 'clear';

export type ButtonSize = 's' | 'm' | 'l';

export type ButtonProps = (ButtonNativeProps | AnchorProps) & {
  theme?: ButtonTheme;
  size?: ButtonSize;
};
