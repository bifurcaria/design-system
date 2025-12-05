import React from "react";
import { Text } from "react-native";
import { TypographyProps } from "./types";

export const Typography: React.FC<TypographyProps> = ({ children, align = 'auto', flexShrink = 1, flexGrow = 0, ...props }) => {
  return (
    <Text {...props} style={{ color: 'blue', textAlign: align, flexShrink, flexGrow }}>
      Hi! This is a blue typography component in native.
      {children}
    </Text>
  );
};