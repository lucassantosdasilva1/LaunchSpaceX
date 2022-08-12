import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Text from "../../../shared/components/text";
import YoutubePlayer from "react-native-youtube-iframe";
import Image from "../../../shared/components/image";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: RFValue(16),
  },
  showsVerticalScrollIndicator: false,
})`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Description = styled(Text)`
  font-size: ${RFValue(12)}px;
`;

export const Player = styled(YoutubePlayer).attrs({
  width: "100%",
  height: RFValue(200),
})`
  width: 100%;
  height: ${RFValue(200)}px;
  border-radius: ${RFValue(12)}px;
`;

export const HorizontalContainer = styled.View`
  margin: ${RFValue(16)}px ${RFValue(0)}px;
`;

export const Badge = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: ${RFValue(8)}px ${RFValue(8)}px;
  padding: ${RFValue(8)}px ${RFValue(0)}px;
  border-radius: ${RFValue(4)}px;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const Label = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const PosterImage = styled(Image)`
  width: 100%;
  height: ${RFValue(200)}px;
  border-radius: ${RFValue(12)}px;
  margin: ${RFValue(8)}px ${RFValue(0)}px;
`;
