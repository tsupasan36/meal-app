import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Entypo, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";

import Categories from "../screens/Categories";
// import Meal from "../screens/Meal";
import CategoryMeals from "../screens/CategoryMeals";
import Meal from "../screens/Meal";
import firebase from "../configs/firebase";

const Stack = createStackNavigator();

class MealNavigation extends React.Component {
  state = {
    favoriteRef: firebase.firestore().collection("Favorites"),
    favorites: [],
  };

  componentDidMount() {
    this.state.favoriteRef.doc("favorites").onSnapshot((doc) => {
      this.setState({ favorites: doc.data().favorites });
    });
  }

  isFavorite = (mealId) => {
    return this.state.favorites.filter((favorite) => favorite === mealId);
  };

  addFavorite = (mealId) => {
    return this.state.favoriteRef.doc("favorites").update({
      /* ドキュメンテーションを確認 firebase　*/
      favorites: firebase.firestore.FieldValue.arrayUnion(mealId),
    });
  };

  removeFavorite = (mealId) => {
    return this.state.favoriteRef.doc("favorites").update({
      favorites: firebase.firestore.FieldValue.arrayRemove(mealId),
    });
  };

  render() {
    const props = this.props;
    return (
      <Stack.Navigator initialRouteName=" Categories">
        <Stack.Screen
          options={{
            title: "Meal Categories",
            headerLeft: () => (
              <TouchableOpacity
                style={{ padding: 15 }}
                onPress={() => props.navigation.toggleDrawer()}
              >
                <Entypo name="menu" size={30} color="black" />
              </TouchableOpacity>
            ),
          }}
          name="Categories"
          component={Categories}
        />
        <Stack.Screen name="Category Meals" component={CategoryMeals} />
        <Stack.Screen
          options={{
            headerRight: () => {
              const index = props.route.state.index;
              const mealId = props.route.state.routes[index].params.mealId;
              const isFavorite = this.isFavorite(mealId).length > 0;
              console.log(mealId);
              return (
                <TouchableOpacity
                  style={{ padding: 15 }}
                  onPress={() =>
                    isFavorite === true
                      ? this.removeFavorite(mealId)
                      : this.addFavorite(mealId)
                  }
                >
                  <AntDesign
                    name={isFavorite === true ? "star" : "staro"}
                    size={30}
                    color="orange"
                  />
                </TouchableOpacity>
              );
            },
          }}
          name="Meal"
          component={Meal}
        />
      </Stack.Navigator>
    );
  }
}

export default MealNavigation;
