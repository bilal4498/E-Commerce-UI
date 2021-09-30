import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TextField_AddressScreen from "../components/TextField_AddressScreen";
import Headerfour from "../components/Headers/Headerfour";

const { height, width } = Dimensions.get("window");

const CreateAddress = (props) => {
  return (
    <SafeAreaView style={styles.mainScreenCont}>
      <View style={styles.Header}>
        <Headerfour />
      </View>
      <View style={styles.AddressTxtCont}>
        <Text style={styles.Addresstxt}> Create Address</Text>
      </View>

      <View style={styles.TextInputContainer}>
        {/* This is text component */}
        <TextField_AddressScreen />
      </View>
      <TouchableOpacity
        style={styles.BtnCont}
        onPress={() => props.navigation.navigate("AddressScreen")}
      >
        <LinearGradient
          colors={["#6681EB", "#64B3FE"]}
          style={styles.LinearButton}
        >
          <Text style={styles.BtnTxt}> Add Address</Text>
        </LinearGradient>
      </TouchableOpacity>
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
  BtnCont: {
    alignItems: "center",
  },
  LinearButton: {
    width: width * 0.8,
    height: height * 0.07,
    borderRadius: width * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },
  BtnTxt: {
    color: "white",
    fontSize: width * 0.05,
  },
});

export default CreateAddress;
