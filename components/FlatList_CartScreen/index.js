import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

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
              <Image
                source={props.x.imgPathtwo}
                resizeMode="contain"
                style={styles.Minus}
              />
            </TouchableOpacity>
            <Text style={styles.QuantityText}>{props.x.txtthree}</Text>
            <TouchableOpacity>
              <Image
                source={props.x.imgPaththree}
                resizeMode="contain"
                style={styles.Plus}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.CancelIcon}>
          <TouchableOpacity>
            <Image
              source={props.x.imgPathfour}
              resizeMode="contain"
              style={styles.cancelBtn}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default index;
