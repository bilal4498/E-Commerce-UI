import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const Header = (props) => {
  return (
    <View style={styles.Container}>
      <Image
        resizeMode="contain"
        style={styles.backbtn}
        source={require("../../assets/images/drawable-xxxhdpi/Shape.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: width * 0.1,
    height: height * 0.05,
    marginLeft: width * 0.05,
  },
  backbtn: {
    width: width * 0.08,
  },
});

export default Header;
