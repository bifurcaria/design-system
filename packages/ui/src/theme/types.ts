export interface ThemeColorShades {
  primary: string;
  secondary?: string;
  tertiary?: string;
  "primary-hover"?: string;
  "secondary-hover"?: string;
  "tertiary-hover"?: string;
  "on-primary"?: string;
  "on-secondary"?: string;
  "on-tertiary"?: string;
}

export interface ThemeForeground {
  default: ThemeColorShades;
  accent: ThemeColorShades;
  success: ThemeColorShades;
  danger: ThemeColorShades;
  warning: ThemeColorShades;
  reward: ThemeColorShades;
  neutral: ThemeColorShades;
  disabled: ThemeColorShades;
}

export interface ThemeBackground {
  default: ThemeColorShades;
  accent: ThemeColorShades;
  success: ThemeColorShades;
  danger: ThemeColorShades;
  warning: ThemeColorShades;
  reward: ThemeColorShades;
  neutral: ThemeColorShades;
  disabled: ThemeColorShades;
}

export interface ThemeBorder {
  default: ThemeColorShades;
  accent: ThemeColorShades;
  success: ThemeColorShades;
  danger: ThemeColorShades;
  warning: ThemeColorShades;
  reward: ThemeColorShades;
  neutral: ThemeColorShades;
  inverse: ThemeColorShades;
  transparent: ThemeColorShades;
  disabled: ThemeColorShades;
}

export interface ThemeColors {
  light: {
    foreground: ThemeForeground;
    background: ThemeBackground;
    border: ThemeBorder;
    data: Record<string, string>;
    skeleton: Record<string, string>;
    assets: Record<string, string>;
  }
}

export interface ThemeTypography {
  families: Record<string, string>;
  sizes: Record<string, string>;
  lineHeights: Record<string, string>;
  letterSpacing: Record<string, string>;
  weights: Record<string, string>;
}

export interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
}
