import React from "react";
import { Image, ImageBackground, View } from "react-native";

import styles from "./style";

const Index = (props) => {
  return (
    <View style={styles.ImgCont}>
      <ImageBackground
        style={styles.Images}
        resizeMode="cover"
        source={props.x.imgPath}
      />
    </View>
  );
};

export default Index;
