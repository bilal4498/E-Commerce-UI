import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height * 0.25,
    marginTop: height * 0.03,
    alignSelf: "center",
    elevation: 1,
    borderRadius: width * 0.01,
  },
  innerCont: {
    width: width * 0.83,
    flexDirection: "row",
    height: height * 0.22,
    marginTop: height * 0.013,
    alignSelf: "center",
  },
  ImageStyle: {
    width: width * 0.34,
    height: height * 0.22,
    borderRadius: width * 0.01,
  },
  TextCont: {
    marginLeft: width * 0.052,
  },
  txtone: {
    fontSize: width * 0.05,
    marginVertical: height * 0.001,
  },
  txttwo: {
    fontSize: width * 0.05,
    color: "#919191",
    marginVertical: height * 0.001,
  },
  price: {
    fontSize: width * 0.05,
    color: "#374ABE",
    marginVertical: height * 0.008,
  },

  button: {
    width: width * 0.35,
    height: height * 0.065,
    backgroundColor: "#F6F6F6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: height * 0.009,
  },
  Minus: {
    width: width * 0.05,
    height: height * 0.064,
  },
  Plus: {
    width: width * 0.1,
    height: height * 0.064,
  },
  QuantityText: {
    fontSize: width * 0.05,
  },
  CancelIcon: {
    height: height * 0.07,
    width: width * 0.05,
    marginLeft: width * 0.07,
    marginTop: height * -0.029,
  },
  cancelBtn: {
    width: width * 0.03,
  },
});
