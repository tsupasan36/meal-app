import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import firebase from "../configs/firebase";

class Meal extends Component {
  state = {
    meal: null,
    mealRef: firebase.firestore().collection("meals"),
  };

  componentDidMount() {
    const mealId = this.props.route.params.mealId;
    this.state.mealRef
      .doc(mealId)
      .get()
      .then((doc) => {
        this.setState({ meal: doc.data() });
      });
  }
  render() {
    if (this.state.meal === null) return null;
    return (
      <ScrollView>
        <View>
          <Image
            source={{ uri: this.state.meal.imageUrl }}
            style={styles.mealImage}
          />
          <Text style={styles.mealTitle}>{this.state.meal.title}</Text>
          <View style={styles.mealDetails}>
            <Text>Complexity:{this.state.meal.complexity}</Text>
            <Text>Duration:{this.state.meal.duration} minutes</Text>
            <Text>Affordability:{this.state.meal.affordability}</Text>
          </View>
          <View>
            <Text style={styles.header}>Ingredients</Text>
            {this.state.meal.ingredients.map((ingredient) => (
              <View style={styles.container}>
                <Text>{ingredient}</Text>
              </View>
            ))}
          </View>
          <View>
            <Text style={styles.header}>steps</Text>
            {this.state.meal.steps.map((step) => (
              <View style={styles.container}>
                <Text>{step}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mealImage: {
    height: 200,
    width: "100%",
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 7,
    marginLeft: 5,
  },
  mealDetails: {
    paddingVertical: 8,
    paddingLeft: 15,
    borderStyle: "dotted",
    margin: 7,
    borderWidth: 0.7,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  container: {
    marginVertical: 7,
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "rgba(0,0,0,0.4)",
    padding: 4,
  },
  header: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "200",
  },
});

export default Meal;
