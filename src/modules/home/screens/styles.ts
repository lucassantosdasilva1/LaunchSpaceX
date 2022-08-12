import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Text from "../../../shared/components/text";
import { FlatList } from "react-native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(0)}px ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const Label = styled(Text)`
  font-size: ${RFValue(12)}px;
  align-self: flex-end;
`;
