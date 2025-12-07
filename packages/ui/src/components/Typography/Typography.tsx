import React, { JSX } from "react";
import { type TypographyVariant, type TypographyProps } from "./types";
import { useTheme } from "../../theme";


const TypographyComponent: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  display: 'h1',
  titleLarge: 'h2',
  title: 'h3',
  titleSmall: 'h3',
  headline: 'h4',
  subheadline: 'h5',
  body: 'p',
  caption: 'span',
  footnote: 'span',
  labelLarge: 'label',
  label: 'label',
  labelSmall: 'label',
}


export const Typography: React.FC<TypographyProps> = ({ 
  children, 
  variant = 'body',
  align = 'auto',
  flexShrink = 1,
  flexGrow = 0,
  bold = false,
}) => {
  const Component = TypographyComponent[variant];
  const theme = useTheme();
  return (
    <Component style={
        {
            fontFamily: theme.typography.families.default,
            fontWeight: bold ? 'bold' : undefined,
            flexShrink,
            flexGrow,
            textAlign: align === 'auto' ? 'inherit' : align,
        }
    }>
      {children}
    </Component>
  );
};
