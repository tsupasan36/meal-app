import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FooterNavigation from "./FooterNavigation";
import FilterNavigater from "./FilterNavigater";

const Drawer = createDrawerNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Meal" component={FooterNavigation} />
        <Drawer.Screen name="Filter" component={FilterNavigater} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
