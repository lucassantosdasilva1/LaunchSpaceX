import React, { useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import Web from "react-native-webview";
import { useTheme } from "styled-components";

type Props = {
  route: { params: { uri: string } };
};

const WebView = ({
  route: {
    params: { uri },
  },
}: Props) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
      }}
    >
      {loading && <ActivityIndicator size="small" color={theme.colors.blue} />}

      <Web
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        style={StyleSheet.absoluteFill}
        source={{ uri }}
      />
    </View>
  );
};

export default WebView;
