import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const CustomText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;
