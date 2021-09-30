import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import styles from "./style";

const Index = (props) => {
  return (
    <View style={styles.ImgCont}>
      <TouchableOpacity>
        <Image source={props.x.imgpath} style={styles.images} />
        <Text style={styles.text}>{props.x.txt}</Text>
        <Text style={styles.text}>{props.x.txtone}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
