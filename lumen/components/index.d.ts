import type * as React from 'react';

export type IconName = 'search' | 'plus' | 'check' | 'x' | 'chevron-down' | 'chevron-right' | 'arrow-right' | 'arrow-up' | 'arrow-down' | 'home' | 'chart' | 'users' | 'sliders' | 'bell' | 'info' | 'alert' | 'check-circle' | 'x-circle' | 'folder' | 'file' | 'mail' | 'lock' | 'calendar' | 'download' | 'filter' | 'more' | 'card' | 'layers' | 'help' | 'logout' | 'trash' | 'eye' | 'key';
/** Documentation-only state hook: forces the hover, focus or pressed look so a static page can show it. Never set it in product code. */
export type ForcedState = 'hover' | 'focus' | 'active';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> { name: IconName; size?: 'sm' | 'md'; /** Set when the icon carries meaning on its own; otherwise it is hidden from assistive tech. */ label?: string }
export declare function Icon(props: IconProps): React.ReactElement;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Leading icon. With no children the button becomes square and needs aria-label. */
  icon?: IconName;
  iconRight?: IconName;
  loading?: boolean;
  block?: boolean;
  href?: string;
  state?: ForcedState;
}
export declare function Button(props: ButtonProps): React.ReactElement;

interface FieldBase { label?: React.ReactNode; hint?: React.ReactNode; error?: React.ReactNode; required?: boolean; optional?: boolean; size?: 'sm' | 'md' | 'lg'; icon?: IconName; state?: ForcedState }
export interface TextFieldProps extends FieldBase, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> { prefix?: React.ReactNode; suffix?: React.ReactNode; trailing?: React.ReactNode; multiline?: boolean; rows?: number }
export declare function TextField(props: TextFieldProps): React.ReactElement;
export interface SelectProps extends FieldBase, Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> { options: Array<string | { value: string; label: string; disabled?: boolean }>; placeholder?: string }
export declare function Select(props: SelectProps): React.ReactElement;

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> { label?: React.ReactNode; description?: React.ReactNode; indeterminate?: boolean; state?: ForcedState }
export declare function Checkbox(props: CheckboxProps): React.ReactElement;
export interface SwitchProps { checked?: boolean; defaultChecked?: boolean; onChange?: (on: boolean) => void; label?: React.ReactNode; disabled?: boolean; id?: string; 'aria-label'?: string; state?: ForcedState; className?: string }
export declare function Switch(props: SwitchProps): React.ReactElement;

export interface CardProps extends React.HTMLAttributes<HTMLElement> { variant?: 'outlined' | 'elevated' | 'interactive'; title?: React.ReactNode; description?: React.ReactNode; actions?: React.ReactNode; footer?: React.ReactNode; flush?: boolean; selected?: boolean; state?: ForcedState }
export declare function Card(props: CardProps): React.ReactElement;
export interface StatCardProps { label: string; value: React.ReactNode; delta?: string; trend?: 'up' | 'down' | 'flat'; caption?: React.ReactNode; icon?: IconName; className?: string }
export declare function StatCard(props: StatCardProps): React.ReactElement;

export interface NavItem { label: string; icon?: IconName; href?: string; active?: boolean; badge?: React.ReactNode; state?: ForcedState }
export interface SidebarProps { brand?: React.ReactNode; sections: Array<{ label?: string; items: NavItem[] }>; user?: { name: string; email: string }; onSelect?: (item: NavItem) => void; className?: string; style?: React.CSSProperties }
export declare function Sidebar(props: SidebarProps): React.ReactElement;
export interface TopbarProps { title?: React.ReactNode; breadcrumbs?: BreadcrumbItem[]; search?: boolean; unread?: boolean; actions?: React.ReactNode; user?: string; className?: string }
export declare function Topbar(props: TopbarProps): React.ReactElement;
export interface TabItem { value: string; label: React.ReactNode; icon?: IconName; count?: number; disabled?: boolean; state?: ForcedState }
export interface TabsProps { items: TabItem[]; value?: string; defaultValue?: string; onChange?: (value: string) => void; variant?: 'underline' | 'segmented'; label?: string; className?: string }
export declare function Tabs(props: TabsProps): React.ReactElement;
export interface BreadcrumbItem { label: string; href?: string }
export declare function Breadcrumbs(props: { items: BreadcrumbItem[] }): React.ReactElement;

export interface BadgeProps { tone?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger'; dot?: boolean; pill?: boolean; icon?: IconName; children?: React.ReactNode; className?: string }
export declare function Badge(props: BadgeProps): React.ReactElement;
export interface AlertProps { tone?: 'info' | 'success' | 'warning' | 'danger'; title?: React.ReactNode; children?: React.ReactNode; actions?: React.ReactNode; onClose?: () => void; className?: string }
export declare function Alert(props: AlertProps): React.ReactElement;
export interface AvatarProps { name: string; src?: string; size?: 'sm' | 'md' | 'lg'; tone?: 'primary' | 'neutral'; status?: 'online' | 'away' | 'offline'; className?: string }
export declare function Avatar(props: AvatarProps): React.ReactElement;
export declare function AvatarGroup(props: { names: string[]; size?: 'sm' | 'md' | 'lg' }): React.ReactElement;

export interface TableColumn<R> { key: string; label: React.ReactNode; align?: 'left' | 'right'; width?: number | string; render?: (row: R) => React.ReactNode }
export interface TableProps<R> { columns: TableColumn<R>[]; rows: Array<R & { id?: string; _selected?: boolean }>; dense?: boolean; caption?: string; className?: string }
export declare function Table<R>(props: TableProps<R>): React.ReactElement;

export interface DialogProps { open: boolean; onClose?: () => void; title: React.ReactNode; description?: React.ReactNode; icon?: IconName; tone?: 'default' | 'danger'; children?: React.ReactNode; footer?: React.ReactNode; width?: number; /** Render inside the nearest positioned parent instead of the viewport (docs and previews). */ inline?: boolean }
export declare function Dialog(props: DialogProps): React.ReactElement | null;

declare global { interface Window { Lumen: { Icon: typeof Icon; Button: typeof Button; TextField: typeof TextField; Select: typeof Select; Checkbox: typeof Checkbox; Switch: typeof Switch; Card: typeof Card; StatCard: typeof StatCard; Sidebar: typeof Sidebar; Topbar: typeof Topbar; Tabs: typeof Tabs; Breadcrumbs: typeof Breadcrumbs; Badge: typeof Badge; Alert: typeof Alert; Avatar: typeof Avatar; AvatarGroup: typeof AvatarGroup; Table: typeof Table; Dialog: typeof Dialog } } }
