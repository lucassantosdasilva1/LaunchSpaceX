import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Lottie from "lottie-react-native";
import EmptyAnimation from "../../../shared/assets/animations/empty-animation.json";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Animation = styled(Lottie).attrs({
  source: EmptyAnimation,
  loop: true,
  autoPlay: true,
})`
  width: 100%;
  height: ${RFValue(500)}px;
`;
