import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {},
  imgContainer: {},
  Images: {
    marginHorizontal: width * 0.01,
    width: width * 0.39,
    height: height * 0.26,
    borderRadius: width * 0.01,
  },
  PriceText: {
    fontSize: width * 0.04,
    marginLeft: width * 0.01,
  },
  titleText: {
    fontSize: width * 0.031,
    marginLeft: width * 0.01,
  },
});
