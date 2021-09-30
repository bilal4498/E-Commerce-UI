import React, { useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("window");

const LoadingScreen = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace("FirstScreen");
    }, 2000);
  }, []);

  return (
    <SafeAreaView>
      <LinearGradient
        colors={["#6580EA", "#64AFFC"]}
        style={styles.LinearGradient}
      >
        <View style={styles.imageCont}>
          <Image
            resizeMode="contain"
            source={require("../assets/images/drawable-xxxhdpi/Logo.png")}
            style={styles.CartImage}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  LinearGradient: {
    width: width * 1,
    height: height * 1,
  },
  imageCont: {
    justifyContent: "center",
    alignItems: "center",
    top: height * 0.15,
  },
  CartImage: {
    width: width * 0.6,
    height: height * 0.3,
  },
});

export default LoadingScreen;
