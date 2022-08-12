import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

const size = RFValue(40);

export const Container = styled.View`
  width: ${size}px;
  height: ${size}px;
  border-radius: ${size / 2}px;
  margin-right: ${RFValue(16)}px;
  overflow: hidden;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
`;
