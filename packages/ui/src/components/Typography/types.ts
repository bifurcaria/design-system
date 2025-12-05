import type { ReactNode } from "react";

export interface BaseTypographyProps {
  children: ReactNode;
  align?: Extract<React.CSSProperties['textAlign'], 'left' | 'center' | 'right'> | 'auto';
  sensitive?: boolean;
  flexShrink?: number;
  flexGrow?: number;
}

  interface HeadingProps extends BaseTypographyProps {
    variant?: HeadingVariants; 
    bold?: never; 
  }
  
  interface BodyProps extends BaseTypographyProps {
    variant?: BodyVariants; 
    bold?: boolean;
  }

  interface LabelProps extends BaseTypographyProps {
    variant?: LabelVariants;
    bold?: never;
  }
  
  type LabelVariants = 'labelLarge' | 'label' | 'labelSmall';
  type BodyVariants = 'body' | 'caption' | 'footnote';
  type HeadingVariants = 'display' | 'titleLarge' | 'title' | 'titleSmall' | 'headline' | 'subheadline';

  export type TypographyProps = HeadingProps | BodyProps | LabelProps;
  export type TypographyVariant = LabelVariants | BodyVariants | HeadingVariants;