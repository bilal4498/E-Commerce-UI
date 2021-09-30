import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import Headerfour from "../components/Headers/Headerfour";
import FlatList_MyOrderScreen from "../components/FlatList_MyOrderScreen";

const { width, height } = Dimensions.get("window");

const MyOrderScreen = (props) => {
  const [state, stateOne] = useState([
    {
      id: Math.random(),
      imgPath: require("../assets/images/drawable-xxxhdpi/featuredfive.png"),
      txtone: "Woman T-shirt",
      txttwo: "Lotto.LTD",
      price: "$34.00",
      btnText: "Order Again",
    },
    {
      id: Math.random(),
      imgPath: require("../assets/images/drawable-xxxhdpi/featuredsix.png"),
      txtone: "Shirt",
      txttwo: "Next",
      price: "$49.00",
      btnText: "Order Again",
    },
    {
      id: Math.random(),
      imgPath: require("../assets/images/drawable-xxxhdpi/featuredone.png"),
      txtone: "Women Shirt",
      txttwo: "Plys Point",
      price: "$33.00",
      btnText: "Order Again",
    },
    {
      id: Math.random(),
      imgPath: require("../assets/images/drawable-xxxhdpi/featuredfour.png"),
      txtone: "Women Shirt",
      txttwo: "Next",
      price: "$33.00",
      btnText: "Order Again",
    },
  ]);
  return (
    <SafeAreaView style={styles.MainScreenCont}>
      <View style={styles.header}>
        <Headerfour />
      </View>
      <View style={styles.myOrderCont}>
        <Text style={styles.myOrderTxt}>My Orders</Text>
      </View>
      <ScrollView>
        {/* This is FlatList component */}
        <FlatList
          data={state}
          keyExtractor={(index) => index.id}
          renderItem={({ item }) => <FlatList_MyOrderScreen x={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainScreenCont: {
    flex: 1,
  },
  myOrderCont: {
    width: width * 0.3,
    marginLeft: width * 0.05,
    height: height * 0.05,
  },
  myOrderTxt: {
    fontSize: width * 0.065,
    color: "black",
  },
});

export default MyOrderScreen;
