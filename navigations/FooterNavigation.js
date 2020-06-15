import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import MealNavigation from "./MealNavigation";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FavoriteNavigation from "./FavoriteNavigation";

const Tab = createMaterialBottomTabNavigator();

function FooterNavigation() {
  return (
    <Tab.Navigator shifting={true}>
      <Tab.Screen
        name="Meals"
        component={MealNavigation}
        options={{
          tabBarColor: "#4a148c",
          tabBarIcon: () => (
            <MaterialIcons name="restaurant" size={24} color="#fff" />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteNavigation}
        options={{
          tabBarColor: "#ff6f00",
          tabBarIcon: () => <AntDesign name="star" size={24} color="#fff" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default FooterNavigation;
