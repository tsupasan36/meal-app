import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import firebase from "../configs/firebase";
import CategoryTiles from "../components/CategoryTiles";

class Categories extends Component {
  state = {
    categoriesRef: firebase.firestore().collection("Categories"),
    categories: [],
  };

  componentDidMount() {
    this.state.categoriesRef.get().then((Snapshot) => {
      const categories = Snapshot.docs.map((doc) => {
        return doc.data();
      });
      this.setState({ categories: categories });
    });
  }

  navigateScreen = (category) => {
    this.props.navigation.navigate("Category Meals", {
      catId: category.id,
    }); /* ここはスクリーンのname  navigationsに入っている*/
  };

  render() {
    return (
      <FlatList
        numColumns={2}
        data={this.state.categories}
        renderItem={({ item }) => (
          <CategoryTiles category={item} changeScreen={this.navigateScreen} />
        )}
      />
    );
  }
}

export default Categories;
