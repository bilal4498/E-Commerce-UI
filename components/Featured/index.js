import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import styles from "./style";

const Index = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.imgBackgroundCont}>
          <Image source={props.x.imgpath} style={styles.images} />
          <Text style={styles.PriceText}>{props.x.txt}</Text>
          <Text style={styles.titleText}>{props.x.txttwo}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
