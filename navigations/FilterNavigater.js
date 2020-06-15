import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Filter from "../screens/Filter";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

function FilterNavigater(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="filter"
        component={Filter}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 15 }}
              onPress={() => props.navigation.toggleDrawer()}
            >
              <Ionicons name="md-menu" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default FilterNavigater;
