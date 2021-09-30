import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import Headerthree from "../components/Headers/Headerthree";
import FavoriteGrid_FavoriteScreen from "../components/FavoriteGrid_FavoriteScreen";
import style from "../components/FeaturedGrid_FeaturedScreen/style";

const { height, width } = Dimensions.get("window");

const FavoriteScreen = (props) => {
  const [statefour, statedFour] = useState([
    {
      imgpath: require("../assets/images/drawable-xxxhdpi/featuredone.png"),
      txt: "$34.00",
      txtone: "Woman T-Shirt",
    },
    {
      imgpath: require("../assets/images/drawable-xxxhdpi/featuredtwo.png"),
      txt: "$34.00",
      txtone: "Man T-Shirt",
    },
    {
      imgpath: require("../assets/images/drawable-xxxhdpi/featuredthree.png"),
      txt: "$34.00",
      txtone: "Woman T-Shirt",
    },
    {
      imgpath: require("../assets/images/drawable-xxxhdpi/featuredfour.png"),
      txt: "$34.00",
      txtone: "Blezer",
    },
    {
      imgpath: require("../assets/images/drawable-xxxhdpi/featuredfive.png"),
      txt: "$34.00",
      txtone: " T-Shirt",
    },
    {
      imgpath: require("../assets/images/drawable-xxxhdpi/featuredsix.png"),
      txt: "$34.00",
      txtone: " T-Shirt",
    },
  ]);
  return (
    <SafeAreaView style={styles.MainScreencontainer}>
      <View style={styles.headerthree}>
        <Headerthree />
      </View>
      <View style={styles.FeaturedTextContainer}>
        <Text style={styles.FeaturedText}>Favorite</Text>
      </View>
      <ScrollView style={styles.FlatListContainer}>
        <FlatList
          style={style.flatlist}
          numColumns={2}
          data={statefour}
          renderItem={({ item }) => <FavoriteGrid_FavoriteScreen x={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainScreencontainer: {
    flex: 1,
  },
  FeaturedTextContainer: {
    marginLeft: width * 0.06,
    marginTop: height * 0.02,
  },
  FeaturedText: {
    fontSize: width * 0.07,
  },
  FlatListContainer: {
    alignSelf: "center",
  },
});

export default FavoriteScreen;
