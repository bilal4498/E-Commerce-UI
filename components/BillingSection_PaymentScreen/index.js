import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./style";

const Index = (props) => {
  return (
    <View style={styles.Billingcontainer}>
      <View style={styles.BillingItems}>
        <Text style={styles.txt}>SubTotal</Text>
        <Text style={styles.txt2}> $160.00</Text>
      </View>
      <View style={styles.BillingItems}>
        <Text style={styles.txt}>Discount</Text>
        <Text style={styles.txt2}> 5%</Text>
      </View>
      <View style={styles.BillingItems}>
        <Text style={styles.txt}>Shipping</Text>
        <Text style={styles.txt2}> $10.00</Text>
      </View>
      <View style={styles.BillingItemsTotal}>
        <Text style={styles.txt}>Total</Text>
        <Text style={styles.txt2}> $162.00</Text>
      </View>
    </View>
  );
};

export default Index;
