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

  linearBtn: {
    width: width * 0.35,
    height: height * 0.065,
    backgroundColor: "#F6F6F6",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: height * 0.009,
    alignItems: "center",
  },
  LinearBtnTxt: {
    color: "white",
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
});
