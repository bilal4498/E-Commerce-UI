import { StyleSheet, Dimensions } from "react-native";

// local

// dimenstion
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  imgBackgroundCont: {
    width: width * 0.35,
    height: height * 0.11,
    justifyContent: "center",
    borderRadius: width * 0.05,
    alignItems: "center",
    marginHorizontal: width * 0.013,
  },
  txtStyle: {
    color: "white",
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
});
