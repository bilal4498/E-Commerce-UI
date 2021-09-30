import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Headerfour from "../components/Headers/Headerfour";
import RadioButton from "expo-radio-button";
const { height, width } = Dimensions.get("window");

const AddressScreen = (props) => {
  const [current, setCurrent] = useState("");
  return (
    <SafeAreaView style={styles.mainScreenCont}>
      <View style={styles.Header}>
        <Headerfour />
      </View>
      <View style={styles.AddressTxtCont}>
        <Text style={styles.Addresstxt}> Address</Text>
      </View>
      <View style={styles.box}>
        <View>
          <Text style={styles.txt}> shewarpara,Mirpur,Dhaka-/126 </Text>
          <Text style={styles.txt}> House Number 93 </Text>
          <Text style={styles.txt}> Road no 9 </Text>
        </View>
        <View>
          <RadioButton
            value="option1"
            selected={current}
            onSelected={(value) => setCurrent(value)}
            radioBackground="blue"
          ></RadioButton>
        </View>
      </View>
      <View style={styles.box}>
        <View>
          <Text style={styles.txt}> Chatklhi Naokhali </Text>
          <Text style={styles.txt}> House Number 22 </Text>
          <Text style={styles.txt}> Road no 7 </Text>
        </View>
        <View>
          <RadioButton
            value="option 2"
            selected={current}
            onSelected={(value) => setCurrent(value)}
            radioBackground="blue"
          ></RadioButton>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.DottedButton}
          onPress={() => props.navigation.navigate("CreateAddress")}
        >
          <Text style={styles.DottedBtnTxt}> Add Address </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("PaymentScreen")}
        >
          <LinearGradient
            colors={["#6684EC", "#64B4FE"]}
            style={styles.LinearButton}
          >
            <Text style={styles.LinearBtnTxt}> Continue to Payment</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainScreenCont: {
    flex: 1,
  },
  AddressTxtCont: {
    width: width * 0.6,
    marginLeft: width * 0.03,
  },
  Addresstxt: {
    fontSize: width * 0.07,
  },
  box: {
    marginTop: height * 0.02,
    width: width * 0.9,
    height: height * 0.1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  txt: {
    fontSize: width * 0.035,
  },
  button: {
    marginTop: height * 0.35,
    height: height * 0.22,
  },
  DottedButton: {
    width: width * 0.8,
    height: height * 0.07,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#667EEA",
    borderStyle: "dotted",
    borderWidth: width * 0.006,
    borderRadius: width * 0.01,
  },
  DottedBtnTxt: {
    color: "#667EEA",
    fontSize: width * 0.05,
  },
  LinearButton: {
    width: width * 0.8,
    height: height * 0.07,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: height * 0.03,
  },
  LinearBtnTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: width * 0.04,
  },
});

export default AddressScreen;
