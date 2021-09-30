import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const ConfirmationScreen = (props) => {
  return (
    <SafeAreaView style={styles.MainCont}>
      <View style={styles.imageCont}>
        <Image
          resizeMode={"contain"}
          source={require("../assets/images/drawable-xxxhdpi/like.png")}
          style={styles.LikePic}
        />
      </View>
      <View style={styles.ConfirmCont}>
        <View style={styles.TextContainer}>
          <Text style={styles.ConfirmationText}>Confirmation</Text>
          <Text style={styles.messageText}>You Have SuccessFully</Text>
          <Text style={styles.messageText}>
            Completed Your Payment Procedure
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen")}>
        <LinearGradient
          colors={["#6684EC", "#64B4FE"]}
          style={styles.LinearButton}
        >
          <Text style={styles.LinearBtnTxt}> Back To Home</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainCont: {
    flex: 1,
  },
  imageCont: {
    marginTop: height * 0.2,
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.4,
  },
  LikePic: {
    width: width * 0.5,
    height: height * 0.5,
  },
  ConfirmCont: {
    alignItems: "center",
  },
  TextContainer: {
    alignItems: "center",
  },
  ConfirmationText: {
    fontSize: width * 0.08,
    marginVertical: height * 0.02,
    color: "#434343",
  },
  messageText: {
    fontSize: width * 0.035,
    color: "#656565",
  },
  LinearButton: {
    width: width * 0.8,
    height: height * 0.07,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.15,
  },
  LinearBtnTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: width * 0.04,
  },
});

export default ConfirmationScreen;
