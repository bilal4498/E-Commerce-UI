import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("window");

const Headertwo = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.ImageCont}>
        <TouchableOpacity onPress={props.handleFirstIconPress}>
          <Image
            resizeMode="contain"
            style={styles.MenuLogo}
            source={require("..//../assets/images/drawable-xxxhdpi/MenuBar.png")}
          />
        </TouchableOpacity>

        <View style={styles.LeftImageCont}>
          <TouchableOpacity onPress={props.handleSecondIconPress}>
            <Image
              resizeMode="contain"
              style={styles.noti}
              source={require("..//../assets/images/drawable-xxxhdpi/notification.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              resizeMode="contain"
              style={styles.filter}
              source={require("..//../assets/images/drawable-xxxhdpi/filter.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageCont: {
    width: width * 0.98,
    height: height * 0.07,
    marginTop: height * 0.03,
    marginLeft: width * 0.03,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  LeftImageCont: {
    flexDirection: "row",

    height: height * 0.07,
  },
  MenuLogo: {
    width: width * 0.06,
    height: height * 0.03,
    marginLeft: width * 0.02,
  },
  filter: {
    width: width * 0.06,
    height: height * 0.07,
    marginHorizontal: height * 0.03,
  },
  noti: {
    width: width * 0.06,
    height: height * 0.06,
  },
});

export default Headertwo;
