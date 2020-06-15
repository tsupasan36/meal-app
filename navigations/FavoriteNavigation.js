import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "../screens/Favorites";
import Meal from "../screens/Meal";

const Stack = createStackNavigator();

class FavoriteNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Meals" component={Meal} />
      </Stack.Navigator>
    );
  }
}

export default FavoriteNavigation;
