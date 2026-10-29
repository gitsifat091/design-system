import type * as React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = clay fill (one per view); secondary = raised putty; accent = mint; ghost = text only. Default primary. */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}
export declare function Button(props: ButtonProps): React.ReactElement;
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Fill colour. Default raised. */
  tone?: 'raised' | 'clay' | 'mint' | 'butter';
  /** Lifts on hover; give it a role/tabIndex or render as a link/button via `as`. */
  interactive?: boolean;
  as?: keyof JSX.IntrinsicElements;
}
export declare function Card(props: CardProps): React.ReactElement;
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  /** Replaces the hint, turns the well danger-soft, prefixed "Error:". */
  error?: string;
}
export declare function TextField(props: TextFieldProps): React.ReactElement;
export interface SwitchProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}
export declare function Switch(props: SwitchProps): React.ReactElement;
export interface BadgeProps { tone?: 'neutral' | 'clay' | 'mint' | 'butter' | 'danger'; children?: React.ReactNode; className?: string }
export declare function Badge(props: BadgeProps): React.ReactElement;
declare global { interface Window { Claymorph: { Button: typeof Button; Card: typeof Card; TextField: typeof TextField; Switch: typeof Switch; Badge: typeof Badge } } }
