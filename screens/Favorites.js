import React, { Component } from "react";
import { View, Text, StatusBar, FlatList } from "react-native";
import MealItem from "../components/MealItem";

import firebase from "../configs/firebase";

class Favorites extends Component {
  state = {
    favoriteRef: firebase.firestore().collection("Favorites"),
    mealsRef: firebase.firestore().collection("meals"),
    favoriteMeals: [],
  };

  componentDidMount() {
    this.state.favoriteRef.doc("favorites").onSnapshot((doc) => {
      const favorites = doc.data().favorites;

      this.state.mealsRef
        .where("id", "in", favorites)
        .get()
        .then((snapshot) => {
          const meals = snapshot.docs.map((doc) => doc.data());

          this.setState({ favoriteMeals: meals });
        });
    });
  }

  navigateScreen = (meal) => {
    this.props.navigation.navigate("Meal", {
      mealId: meal.id,
    });
  };

  render() {
    return (
      <View>
        <StatusBar />
        <View>
          <FlatList
            data={this.state.favoriteMeals}
            renderItem={({ item }) => (
              <MealItem meal={item} changeScreen={this.navigateScreen} />
            )}
          />
        </View>
      </View>
    );
  }
}
export default Favorites;
