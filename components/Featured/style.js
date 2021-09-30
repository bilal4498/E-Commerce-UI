import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    height: height * 0.35,
  },
  imgBackgroundCont: {
    marginHorizontal: width * 0.01,
  },
  images: {
    width: width * 0.4,
    height: height * 0.25,
    borderRadius: width * 0.017,
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
