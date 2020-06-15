import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import firebase from "../configs/firebase";
import MealItem from "../components/MealItem";

class CategoryMeals extends Component {
  state = {
    meals: [],
    mealsRef: firebase.firestore().collection("meals"),
  };

  componentDidMount() {
    const catId = this.props.route.params.catId;

    this.state.mealsRef
      .where("categoryIds", "array-contains", catId)
      .get()
      .then((snapshot) => {
        const meals = snapshot.docs.map((doc) => doc.data());

        this.setState({ meals: meals });
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
        <FlatList
          data={this.state.meals}
          renderItem={({ item }) => (
            <MealItem meal={item} changeScreen={this.navigateScreen} />
          )}
        />
      </View>
    );
  }
}
export default CategoryMeals;
