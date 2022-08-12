import React from "react";
import { TextProps } from "react-native";
import { CustomText } from "./styles";

type Props = TextProps & {
  value: string;
};

const Text = ({ value, ...rest }: Props) => (
  <CustomText {...rest}>{value}</CustomText>
);

export default Text;
