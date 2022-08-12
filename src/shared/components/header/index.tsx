import React from "react";
import { VerticalContainer, Container, Title, Button, BackIcon } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>
        <BackIcon />
      </Button>

      <VerticalContainer>
        <Title value={title} />
      </VerticalContainer>
    </Container>
  );
};

export default Header;
