import React from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";

//local import

import styles from "./style";

const Index = (props) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={props.x.imgPath}
        style={styles.imgBackgroundCont}
      >
        <Text style={styles.txtStyle}>{props.x.txt}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Index;
