import type { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
}