import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { apiDTO } from "./src/DTO";
import { getApi } from "./src/service/service";

export default function App() {
  const a = async () => {
    const resultado : apiDTO[] | undefined = await getApi();
  };
  useEffect(() => {
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="butaozin" onPress={a}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
