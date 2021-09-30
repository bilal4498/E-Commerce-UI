import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  Images: {
    height: height * 0.3,
    width: width * 0.89,
    position: "absolute",
  },
  ImgCont: {
    width: width * 1,
    height: height * 0.2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.1,
  },
});
