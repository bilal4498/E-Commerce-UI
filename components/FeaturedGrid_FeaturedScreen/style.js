import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  ImgCont: {},
  images: {
    width: width * 0.4,
    height: height * 0.3,
    marginHorizontal: width * 0.04,
    borderRadius: width * 0.013,
    marginVertical: height * 0.02,
  },
  text: {
    fontSize: width * 0.035,
    marginLeft: width * 0.05,
    marginVertical: height * 0.005,
  },
});
