import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StatusBar,
  ScrollView,
} from "react-native";
import Headerfour from "../components/Headers/Headerfour";
import FlatList_CartScreen from "../components/FlatList_CartScreen";
import { LinearGradient } from "expo-linear-gradient";
import RadioButton from "expo-radio-button";
import { stubArray } from "lodash";

const { width, height } = Dimensions.get("window");

const CheckoutScreen = (props) => {
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
  ]);
  const [stateTwo, statedTwo] = useState([""]);
  return (
    <SafeAreaView style={styles.MainScreenCont}>
      <View style={styles.header}>
        <Headerfour />
      </View>
      <View style={styles.CheckOutContTxt}>
        <Text style={styles.Checkouttxt}>Checkout</Text>
      </View>
      <ScrollView>
        <View style={styles.FlatListCont}>
          <FlatList
            keyExtractor={(index) => index.id}
            renderItem={({ item }) => <FlatList_CartScreen x={item} />}
            data={state}
          />
        </View>
        <View style={styles.AddressCont}>
          <View style={styles.TextCont}>
            <Text style={styles.AddressTxt}>
              Shewarpara Road,Mirpur,Dhaka-1216
            </Text>
            <Text style={styles.AddressTxt}>House no.938</Text>
            <Text style={styles.AddressTxt}>Road no 9</Text>
          </View>
          <View style={styles.Radio}>
            <RadioButton
              value="option 1"
              selected={stateTwo}
              onSelected={(value) => statedTwo(value)}
              radioBackground="blue"
            />
          </View>
        </View>
        <View style={styles.BillingSect}>
          <View style={styles.TextCont}>
            <Text style={styles.BillText}>Subtotal</Text>
            <Text style={styles.BillText}>Discount</Text>
            <Text style={styles.BillText}>Ship</Text>
          </View>
          <View style={styles.PriceCont}>
            <Text style={styles.priceTxt}>$ 160.00</Text>
            <Text style={styles.priceTxt}>5%</Text>
            <Text style={styles.priceTxt}>$10.00</Text>
          </View>
        </View>
        <View style={styles.TotalCont}>
          <View style={styles.TxtCont}>
            <Text style={styles.TxtTotal}>Total</Text>
          </View>
          <View>
            <Text style={styles.TxtTotal}>$ 162.00</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.BtnCont}
          onPress={() => props.navigation.navigate("ConfirmationScreen")}
        >
          <LinearGradient
            colors={["#6681EB", "#64B3FE"]}
            style={styles.LinearButton}
          >
            <Text style={styles.BtnTxt}> Buy</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainScreenCont: {
    flex: 1,
  },
  CheckOutContTxt: {
    width: width * 0.4,
    height: height * 0.1,
    marginLeft: width * 0.05,
    marginTop: height * 0.02,
  },
  Checkouttxt: {
    fontSize: width * 0.07,
  },
  AddressCont: {
    height: height * 0.12,
    width: width * 0.85,
    alignSelf: "center",
    marginTop: height * 0.03,
    flexDirection: "row",
    borderColor: "#D8D8D8",
    borderBottomWidth: width * 0.003,
  },
  AddressTxt: {
    fontSize: width * 0.04,
  },
  Radio: {
    marginLeft: width * 0.15,
  },
  BillingSect: {
    height: height * 0.16,
    width: width * 0.89,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "#D8D8D8",
    borderBottomWidth: width * 0.003,
  },
  BillText: {
    fontSize: width * 0.04,
    marginVertical: height * 0.01,
    marginRight: width * 0.51,
    color: "#919191",
  },
  priceTxt: {
    fontSize: width * 0.04,
    marginVertical: height * 0.01,
  },
  TotalCont: {
    height: height * 0.05,
    width: width * 0.89,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  TxtTotal: {
    fontSize: width * 0.04,
  },
  TxtCont: {
    marginRight: width * 0.58,
  },
  BtnCont: {
    alignItems: "center",
    marginLeft: width * 0.01,
  },
  LinearButton: {
    width: width * 0.9,
    height: height * 0.07,
    borderRadius: width * 0.02,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.03,
  },
  BtnTxt: {
    color: "white",
    fontSize: width * 0.05,
  },
});

export default CheckoutScreen;
