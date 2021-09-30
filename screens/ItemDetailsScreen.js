import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import Headerthree from "../components/Headers/Headerthree";
import Slider_ItemDetailScreens from "../components/Slider_ItemDetailScreens";
const { height, width } = Dimensions.get("window");

const ItemDetailsScreen = (props) => {
  const [state, stateone] = useState([
    {
      id: Math.random(),
      imgPath: require("../assets/images/drawable-xxxhdpi/Sliderone.png"),
    },
    {
      id: Math.random(),
      imgPath: require("../assets/images/drawable-xxxhdpi/Sliderone.png"),
    },
    {
      id: Math.random(),
      imgPath: require("../assets/images/drawable-xxxhdpi/Sliderone.png"),
    },
  ]);

  return (
    <SafeAreaView style={styles.MainScreenCont}>
      <View style={styles.header}>
        <Headerthree />
      </View>
      <View style={styles.SliderCont}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(index) => index.id}
          data={state}
          renderItem={({ item }) => <Slider_ItemDetailScreens x={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainScreenCont: {
    flex: 1,
  },
});

export default ItemDetailsScreen;
