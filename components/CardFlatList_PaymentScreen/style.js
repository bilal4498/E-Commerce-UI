import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    height: height * 0.3,
    marginTop: height * 0.02,
  },
  img: {
    height: height * 0.3,
    width: width * 0.83,
    marginHorizontal: width * 0.019,
    borderRadius: width * 0.03,
  },
});
