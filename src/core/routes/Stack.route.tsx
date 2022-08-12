import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../../shared/components/header";

import Home from "../../modules/home/screens";
import Details from "../../modules/details/screens";
import WebView from "../../modules/webview";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

const Stack = createStackNavigator();

export default function StackRoute() {
  const theme = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Spacex",
          headerTitleStyle: {
            fontFamily: theme.fonts.semiBold,
            fontSize: RFValue(16),
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ header: () => <Header title="Detalhes" /> }}
      />
      <Stack.Screen
        name="WebView"
        component={WebView}
        options={{ header: () => <Header title="Navegador" /> }}
      />
    </Stack.Navigator>
  );
}
