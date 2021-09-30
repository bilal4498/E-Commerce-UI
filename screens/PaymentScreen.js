import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Headerfour from "../components/Headers/Headerfour";
import CardFlatList_PaymentScreen from "../components/CardFlatList_PaymentScreen";
import BillingSection_PaymentScreen from "../components/BillingSection_PaymentScreen";
import Buttons_PaymentScreen from "../components/Buttons_PaymentScreen";
const { height, width } = Dimensions.get("window");

const Payment = (props) => {
  const [state, stateOne] = useState([
    {
      id: 1,
      imgpath: require("../assets/images/drawable-xxxhdpi/Card.png"),
    },
    {
      id: 2,
      imgpath: require("../assets/images/drawable-xxxhdpi/Card.png"),
    },
    {
      id: 3,
      imgpath: require("../assets/images/drawable-xxxhdpi/Card.png"),
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Headerfour />
      </View>
      <View style={styles.PaymentTextCont}>
        <Text style={styles.PaymentTxt}>Payment</Text>
      </View>
      <View>
        {/* it's a component Card flatlist */}
        <FlatList
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={state}
          renderItem={({ item }) => <CardFlatList_PaymentScreen x={item} />}
        />
      </View>
      {/* it's a component of billing Section */}
      <View style={styles.billingSection}>
        <BillingSection_PaymentScreen />
      </View>

      {/* it's a button component   */}
      <View style={styles.buttonCont}>
        <Buttons_PaymentScreen navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  PaymentTextCont: {
    height: height * 0.07,
    marginTop: height * 0.02,
  },
  PaymentTxt: {
    fontSize: width * 0.07,
    marginLeft: width * 0.05,
  },
  buttonCont: {
    marginTop: height * 0.02,
  },
});

export default Payment;
