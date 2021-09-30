import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./style";

const Index = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.x.imgpath} style={styles.img} />
    </View>
  );
};

export default Index;
