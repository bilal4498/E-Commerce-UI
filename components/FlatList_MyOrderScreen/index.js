import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./style";

const index = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerCont}>
        <View style={styles.imgCont}>
          <Image
            resizeMode="stretch"
            style={styles.ImageStyle}
            source={props.x.imgPath}
          />
        </View>
        <View style={styles.TextCont}>
          <Text style={styles.txtone}>{props.x.txtone}</Text>
          <Text style={styles.txttwo}>{props.x.txttwo}</Text>
          <Text style={styles.price}>{props.x.price}</Text>

          <View style={styles.button}>
            <TouchableOpacity>
              <LinearGradient
                colors={["#6684EC", "#64B4FE"]}
                style={styles.linearBtn}
              >
                <Text style={styles.LinearBtnTxt}>{props.x.btnText}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;
