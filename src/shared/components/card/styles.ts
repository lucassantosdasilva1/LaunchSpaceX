import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Text from "../text";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
  elevation: 5,
})`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(16)}px;
  border-radius: ${RFValue(12)}px;
  margin: ${RFValue(8)}px ${RFValue(0)}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Image = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border-radius: ${RFValue(50)}px;
`;

export const VerticalContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(16)}px;
`;

export const Details = styled(Text)`
  font-size: ${RFValue(12)}px;
`;
