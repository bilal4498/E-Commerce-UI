import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./style";

const Buttons = (props) => {
  return (
    <View style={styles.ButtonCont}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("CheckoutScreen")}
      >
        <LinearGradient
          colors={["#6682EC", "#64B1FD"]}
          style={styles.LinearButton}
        >
          <Text style={styles.LinearButtonText}> Checkout</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
