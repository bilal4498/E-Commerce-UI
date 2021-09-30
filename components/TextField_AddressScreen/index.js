import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const index = (props) => {
  return (
    <View style={styles.TextCont}>
      <Text style={styles.Headings}> Name</Text>
      <TextInput placeholder="enter your name" style={styles.inputField} />
      <Text style={styles.Headings}> Address Lane</Text>
      <TextInput placeholder="enter your Address" style={styles.inputField} />
      <Text style={styles.Headings}> City</Text>
      <TextInput placeholder="for eg.Karachi" style={styles.inputField} />
      <Text style={styles.Headings}> Postal Code</Text>
      <TextInput placeholder=" for eg.00000" style={styles.inputField} />
      <Text style={styles.Headings}> Phone Number</Text>
      <TextInput placeholder="03xxxxxx" style={styles.inputField} />
    </View>
  );
};

export default index;

import styles from "./style";
