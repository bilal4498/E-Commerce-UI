import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import styles from "../BestSellsGrid/style";

const BestSell = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.imgContainer}>
          <Image source={props.z.imgpath} style={styles.Images} />
          <Text style={styles.PriceText}>{props.z.txt}</Text>
          <Text style={styles.titleText}>{props.z.txttwo}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BestSell;
