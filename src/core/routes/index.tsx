import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackRoute from "./Stack.route";

export default function MainRoute() {
  return (
    <NavigationContainer>
        <StackRoute />
    </NavigationContainer>
  );
}