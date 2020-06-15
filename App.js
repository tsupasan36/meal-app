import React from "react";
import { StyleSheet, View } from "react-native";
import { encode, decode } from "base-64";

import MealNavigation from "./navigations/RootNavigation";
import "react-native-gesture-handler"; /*  don't forget  */

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

export default function App() {
  return <MealNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
