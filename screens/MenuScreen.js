import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

const { width, height } = Dimensions.get("window");

const MenuScreen = (props) => {
  return (
    <SafeAreaView style={styles.MainScreenCont}>
      <View style={styles.menu}>
        <TouchableOpacity>
          <Text style={styles.txt}>Home </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.txt}>Profile </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.txt}>My Cart </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.txt}>Favorite </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.txt}>My Orders </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.txt}>Language </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.txt}>Setting </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.CancelButtonCont}>
        <Image
          resizeMode="contain"
          style={styles.CancelButtonImage}
          source={require("../assets/images/drawable-xxxhdpi/Cencel.png")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainScreenCont: {
    flex: 1,
  },
  menu: {
    width: width * 0.9,
    alignSelf: "center",
    height: height * 0.8,
    marginTop: height * 0.05,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: width * 0.06,
    marginVertical: height * 0.02,
    color: "#696969",
  },
  CancelButtonCont: {
    width: width * 0.2,
    alignSelf: "flex-end",
    borderRadius: width * 1,
    alignItems: "center",
  },

  CancelButtonImage: {
    width: width * 0.09,
  },
});

export default MenuScreen;
