import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Headerfour from "../components/Headers/Headerfour";
import FlatList_CartScreen from "../components/FlatList_CartScreen";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("window");
const CartScreen = (props) => {
  const [state, stateOne] = useState([
    {
      id: Math.random(),
      imgPath: require("../assets/images/drawable-xxxhdpi/featuredfive.png"),
      txtone: "Woman T-shirt",
      txttwo: "Lotto.LTD",
      price: "$34.00",
      imgPathtwo: require("../assets/images/drawable-xxxhdpi/plus.png"),
      imgPaththree: require("../assets/images/drawable-xxxhdpi/minus.png"),
      txtthree: "1",
      imgPathfour: require("../assets/images/drawable-xxxhdpi/cancel.png"),
    },
    {
      id: Math.random(),
      imgPath: require("../assets/images/drawable-xxxhdpi/featuredsix.png"),
      txtone: "Shirt",
      txttwo: "Next",
      price: "$49.00",
      imgPathtwo: require("../assets/images/drawable-xxxhdpi/plus.png"),
      imgPaththree: require("../assets/images/drawable-xxxhdpi/minus.png"),
      txtthree: "1",
      imgPathfour: require("../assets/images/drawable-xxxhdpi/cancel.png"),
    },
    {
      id: Math.random(),
      imgPath: require("../assets/images/drawable-xxxhdpi/featuredone.png"),
      txtone: "Women Shirt",
      txttwo: "Plys Point",
      price: "$33.00",
      imgPathtwo: require("../assets/images/drawable-xxxhdpi/plus.png"),
      imgPaththree: require("../assets/images/drawable-xxxhdpi/minus.png"),
      txtthree: "1",
      imgPathfour: require("../assets/images/drawable-xxxhdpi/cancel.png"),
    },
    {
      id: Math.random(),
      imgPath: require("../assets/images/drawable-xxxhdpi/featuredfour.png"),
      txtone: "Women Shirt",
      txttwo: "Next",
      price: "$33.00",
      imgPathtwo: require("../assets/images/drawable-xxxhdpi/plus.png"),
      imgPaththree: require("../assets/images/drawable-xxxhdpi/minus.png"),
      txtthree: "1",
      imgPathfour: require("../assets/images/drawable-xxxhdpi/cancel.png"),
    },
  ]);
  return (
    <SafeAreaView style={styles.mainScreenContainer}>
      <View style={styles.Header}>
        <Headerfour />
      </View>
      <View style={styles.myOrderText}>
        <Text style={styles.orderTxt}> Cart </Text>
      </View>

      {/* This is FlatList component  */}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={state}
        keyExtractor={(index) => index.id}
        renderItem={({ item }) => <FlatList_CartScreen x={item} />}
      />

      <TouchableOpacity
        style={styles.btnCont}
        onPress={() => props.navigation.navigate("AddressScreen")}
      >
        <LinearGradient
          colors={["#6682EC", "#64B1FD"]}
          style={styles.ContinueButton}
        >
          <Text style={styles.btnTxt}> Continue</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
  },
  myOrderText: {
    marginTop: height * 0.03,
    width: width * 0.4,
    height: height * 0.06,
    marginLeft: width * 0.04,
  },
  orderTxt: {
    fontSize: width * 0.08,
  },
  btnCont: {
    alignItems: "center",
    position: "absolute",
    bottom: height * 0.07,
    alignSelf: "center",
  },
  ContinueButton: {
    width: width * 0.82,
    borderRadius: width * 0.03,
    height: height * 0.07,
    alignItems: "center",

    justifyContent: "center",
  },
  btnTxt: {
    fontSize: width * 0.05,
    color: "white",
  },
  FlatListContainer: {
    alignSelf: "center",
    marginVertical: height * 0.01,
  },
});

export default CartScreen;
