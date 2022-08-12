import React, { useState } from "react";
import { Container, VerticalContainer, Title, Details } from "./styles";
import IData from "../../../core/dto";

import Image from "../image";
import { useNavigation } from "@react-navigation/native";
import v3DTO from "../../../core/dto/v3DTO";
import { Text } from "react-native";

type Props = {
  data: v3DTO;
};

const Card = ({ data}: Props) => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate("Details", { data })}>
      {data.links.mission_patch && <Image uri={data.links.mission_patch} />}

      <VerticalContainer>
        <Title value={data.mission_name} />
        <Text>Flight Number: {data.flight_number}</Text>
        {data.details && (
          <Details value={`${data.details}`.substring(0, 100).concat("...")} />
        )}
      </VerticalContainer>
    </Container>
  );
};

export default Card;
