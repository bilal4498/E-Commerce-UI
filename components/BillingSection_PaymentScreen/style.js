import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  Billingcontainer: {
    height: height * 0.2,
    marginTop: height * 0.04,
    width: width * 1,
  },
  BillingItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: height * 0.01,
  },
  BillingItemsTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: height * 0.01,
    marginLeft: width * 0.003,
    borderTopWidth: width * 0.003,
    borderTopStartRadius: width * 0.08,
    borderTopEndRadius: width * 0.1,
    borderTopColor: "#D8D8D8",
    marginVertical: height * 0.01,
  },
  txt: {
    fontSize: width * 0.04,
    marginLeft: width * 0.05,
    color: "#919191",
  },
  txt2: {
    fontSize: width * 0.04,
    marginRight: width * 0.1,
    color: "#434343",
  },
});
