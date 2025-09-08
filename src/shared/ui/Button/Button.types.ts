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

export type ButtonProps = (ButtonNativeProps | AnchorProps) & {
  theme?: ButtonTheme;
};

export const ButtonTheme = {
  CLEAR: 'clear',
} as const;

export type ButtonTheme = (typeof ButtonTheme)[keyof typeof ButtonTheme];
