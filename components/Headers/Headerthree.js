import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("window");

const Headerthree = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.ImageCont}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
          <Image
          
            resizeMode="contain"
            style={styles.backLogo}
            source={require("..//../assets/images/drawable-xxxhdpi/Shape.png")}
          />
        </TouchableOpacity>

        <View style={styles.LeftImageCont}>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              style={styles.magnify}
              source={require("..//../assets/images/drawable-xxxhdpi/Search.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              resizeMode="contain"
              style={styles.notification}
              source={require("..//../assets/images/drawable-xxxhdpi/notification.png")}
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
    marginTop: height * 0.05,
    marginLeft: width * 0.03,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  LeftImageCont: {
    flexDirection: "row",

    height: height * 0.07,
  },
  backLogo: {
    width: width * 0.07,
    height: height * 0.03,
    marginTop: height * 0.003,
    marginLeft: width * 0.02,
  },
  notification: {
    width: width * 0.06,
    height: height * 0.07,
    marginHorizontal: height * 0.03,
  },
  magnify: {
    width: width * 0.06,
    marginTop: height * 0.008,
    height: height * 0.06,
  },
});

export default Headerthree;
