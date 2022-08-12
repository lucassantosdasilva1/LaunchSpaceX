import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

export const InputContainer = styled.View`
  width: 100%;
  height: ${RFValue(35)}px;
  flex-direction: row;
  align-items: center;
  padding-left: ${RFValue(16)}px;
  margin: ${RFValue(16)}px ${RFValue(0)}px;
  border-radius: ${RFValue(4)}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.secondary,
}))`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: ${RFValue(30)}px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled(Ionicons).attrs(({ theme }) => ({
  name: "search",
  size: RFValue(15),
  color: theme.colors.secondary,
}))`
  margin-right: ${RFValue(8)}px;
`;

export const ClearIcon = styled(Ionicons).attrs(({ theme }) => ({
  name: "close",
  size: RFValue(18),
  color: theme.colors.secondary,
}))``;
