import React from "react";
import MainRoute from "./routes";
import { useFonts } from "expo-font";

import { store } from "./store";
import { Provider as ReduxProvider } from "react-redux";

import theme from "../shared/theme";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [loaded] = useFonts({
    InterRegular: require("../shared/assets/fonts/Inter-Regular.ttf"),
    InterMedium: require("../shared/assets/fonts/Inter-Medium.ttf"),
    InterSemiBold: require("../shared/assets/fonts/Inter-SemiBold.ttf"),
    InterBold: require("../shared/assets/fonts/Inter-Bold.ttf"),
  });

  if (!loaded) return <></>;

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <MainRoute />
      </ThemeProvider>
    </ReduxProvider>
  );
}
