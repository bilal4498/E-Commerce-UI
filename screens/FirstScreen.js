import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");
const FirstScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerText}>
        <Text style={styles.text}> Welcome to Bolt</Text>
        <Text style={styles.texttwo}>Explore Us </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.backgroundImage}
          resizeMode="contain"
          source={require("../assets/images/drawable-xxxhdpi/Image.png")}
        />
      </View>

      <View style={styles.Buttoncontainer}>
        <TouchableOpacity
          onPress={() => props.navigation.push("LoginPage")}
          style={styles.button}
        >
          <LinearGradient
            colors={["#6683EC", "#64B4FE"]}
            style={styles.gradient}
          >
            <Text style={styles.buttontext}>Log in</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.push("SignupPage")}
          styles={styles.buttontwo}
        >
          <Text style={styles.buttonTwoText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    alignItems: "center",
    marginTop: height * 0.12,
  },
  text: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    marginVertical: height * 0.01,
    color: "#707070",
  },
  texttwo: {
    fontSize: width * 0.04,
    color: "#707070",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.31,
    marginTop: height * 0.1,
  },
  backgroundImage: {
    width: width * 0.75,
  },
  Buttoncontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 0.02,
    elevation: 4,
  },
  button: {
    width: width * 0.8,
    height: height * 0.07,
    marginVertical: height * 0.05,
  },
  buttontext: {
    color: "white",
    fontSize: width * 0.05,
  },
  buttontwo: {
    justifyContent: "center",
    alignContent: "center",
  },
  buttonTwoText: {
    fontSize: width * 0.04,
    color: "#454242",
  },
});

export default FirstScreen;
