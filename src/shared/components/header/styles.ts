import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Text from "../text";
import { MaterialIcons } from "@expo/vector-icons";

export const VerticalContainer = styled.View``;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(48)}px ${RFValue(16)}px ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(16)}px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  position: absolute;
  top: ${RFValue(49)}px;
  left: ${RFValue(16)}px;
`;

export const BackIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  name: "arrow-back-ios",
  size: RFValue(18),
  color: theme.colors.secondary,
}))``;
