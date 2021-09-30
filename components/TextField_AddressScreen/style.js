import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  TextCont: {
    width: width * 0.9,
    height: height * 0.7,
    alignSelf: "center",
    marginTop: height * 0.04,
  },
  inputField: {
    borderBottomWidth: width * 0.004,
    marginVertical: height * 0.02,
    borderBottomColor: "#D8D8D8",
    padding: width * 0.01,
    width: width * 0.9,
    color: "black",
    marginLeft: width * 0.01,
    fontSize: width * 0.04,
  },
  Headings: {
    fontSize: width * 0.03,
    color: "#919191",
  },
});
