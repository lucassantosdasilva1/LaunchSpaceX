import React, { useState } from "react";
import { ActivityIndicator, ImageBackgroundProps, ViewProps } from "react-native";
import { useTheme } from "styled-components";
import { Container, ImageBackground } from "./styles";

type Props = ViewProps & {
  uri: string;
};

const Image = ({ uri, ...rest }: Props) => {
  const theme = useTheme();
  const [loadImage, setLoadImage] = useState(false);

  return (
    <Container
    {...rest}>
      {loadImage && (
        <ActivityIndicator
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            left: 0,
            bottom: 0,
          }}
          size="small"
          color={theme.colors.blue}
        />
      )}

      <ImageBackground
        source={{ uri }}
        onLoadStart={() => setLoadImage(true)}
        onLoadEnd={() => setLoadImage(false)}
      ></ImageBackground>
    </Container>
  );
};

export default Image;
