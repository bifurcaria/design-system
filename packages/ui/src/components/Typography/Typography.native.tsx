import React from "react";
import { Text } from "react-native";
import { TypographyProps } from "./types";
import { useTheme } from "../../theme";

export const Typography: React.FC<TypographyProps> = ({ children, align = 'auto', flexShrink = 1, flexGrow = 0, ...props }) => {
  const theme = useTheme();

  return (
    <Text {...props} style={{ textAlign: align, flexShrink, flexGrow, fontFamily: theme.typography.families.default }}>
      {children}
    </Text>
  );
};