import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

class MealItem extends Component {
  render() {
    return (
      <View style={styles.mealDetail}>
        <TouchableOpacity
          onPress={() => this.props.changeScreen(this.props.meal)}
        >
          <View style={styles.mealHeader}>
            <ImageBackground
              source={{ uri: this.props.meal.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.title}>
                <Text style={styles.titleText}>{this.props.meal.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.footer}>
            <Text>{this.props.meal.duration}</Text>
            <Text>{this.props.meal.complexity.toUpperCase()}</Text>
            <Text>{this.props.meal.affordability.toUpperCase()}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mealDetail: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    marginVertical: 10,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealHeader: {
    height: "86%",
  },
  title: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  titleText: {
    fontSize: 20,
    color: "white",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

export default MealItem;
