import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import TextField_AddressScreen from "../components/TextField_AddressScreen";
import Headerfour from "../components/Headers/Headerfour";

const { height, width } = Dimensions.get("window");

const ProfileScreen = (props) => {
  return (
    <SafeAreaView style={styles.mainScreenCont}>
      <View style={styles.Header}>
        <Headerfour />
      </View>
      <View style={styles.AddressTxtCont}>
        <Text style={styles.Addresstxt}> Profile</Text>
      </View>

      <View style={styles.TextInputContainer}>
        {/* This is text component */}
        <TextField_AddressScreen />
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
});

export default ProfileScreen;
