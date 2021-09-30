import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  ButtonCont: {
    height: height * 0.3,
    width: width * 1,
    alignItems: "center",
  },
  button1: {
    width: width * 0.89,
    marginTop: height * 0.03,
    borderColor: "#667EEA",
    borderStyle: "dotted",
    borderRadius: width * 0.01,
    borderWidth: width * 0.006,
    height: height * 0.07,
    justifyContent: "center",
  },
  ButtonText: {
    fontSize: width * 0.06,
    textAlign: "center",
    color: "#667EEA",
  },
  LinearButton: {
    marginVertical: height * 0.03,
    width: width * 0.89,
    height: height * 0.07,
    justifyContent: "center",
  },
  LinearButtonText: {
    fontSize: width * 0.06,
    textAlign: "center",
    color: "white",
  },
});
