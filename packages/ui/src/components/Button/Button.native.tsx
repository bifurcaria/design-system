import React from "react";
import { Pressable } from "react-native";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = (props) => {
  return <Pressable {...props} />;
};
