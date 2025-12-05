import React from "react";
import { TypographyProps } from "./types";
import { useTheme } from "../../theme";

enum TypographyComponent {
  display = 'h1',
  titleLarge = 'h2',
  title = 'h3',
  titleSmall = 'h3',
  headline = 'h4',
  subheadline = 'h5',
  body = 'p',
  caption = 'span',
  footnote = 'span',
  labelLarge = 'label',
  label = 'label',
  labelSmall = 'label',
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
            color: 'red',
            fontWeight: bold ? 'bold' : undefined,
            flexShrink,
            flexGrow,
            textAlign: align === 'auto' ? 'inherit' : align,
        }
    }>
        Hi! This is a red typography component in web.
      {children}
    </Component>
  );
};
