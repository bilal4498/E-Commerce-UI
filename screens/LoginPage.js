import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Headers/Header";

const { width, height } = Dimensions.get("window");

const LoginPage = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.header}
      >
        <Header />
      </TouchableOpacity>
      <View style={styles.Conttext}>
        <Text style={styles.Text}> Login</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.EmailText}> Email</Text>
        <TextInput style={styles.TextInput} />

        <Text style={styles.PasswordText}> Password</Text>
        <TouchableOpacity style={styles.EyeCont}>
          <Image
            style={styles.iconView}
            source={require("../assets/images/drawable-xxxhdpi/Icon-View.png")}
          />
        </TouchableOpacity>
        <TextInput style={styles.TextInputwo} />
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.push("HomeScreen")}
        style={styles.button}
      >
        <LinearGradient colors={["#6683EC", "#64B4FE"]} style={styles.gradient}>
          <Text style={styles.buttontext}>Log in</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.LastText}>
        <Text style={styles.textone}> Dont Have an Account?</Text>
        <TouchableOpacity onPress={() => props.navigation.push("SignupPage")}>
          <Text style={styles.texttwo}> Signup </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: width * 0.2,
    height: height * 0.05,
    marginTop: height * 0.06,
  },
  Conttext: {
    marginLeft: width * 0.03,
    marginTop: height * 0.01,
  },
  Text: {
    fontSize: width * 0.08,
  },
  inputContainer: {
    marginLeft: width * 0.05,
    marginTop: height * 0.07,
  },
  TextInput: {
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: width * 0.003,
    marginVertical: height * 0.02,
    width: width * 0.9,
    alignContent: "center",
    marginLeft: width * 0.01,
    fontSize: width * 0.04,
  },
  EmailText: {
    fontSize: width * 0.04,
    opacity: 0.5,
  },
  PasswordText: {
    fontSize: 18,
    opacity: 0.5,
    marginVertical: height * 0.02,
  },
  TextInputwo: {
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: width * 0.003,
    width: width * 0.92,
    alignContent: "center",
    marginTop: height * -0.01,
  },
  EyeCont: {
    width: width * 0.3,
    height: height * 0.02,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: width * 0.72,
  },
  iconView: {
    width: width * 0.05,
    height: height * 0.02,
  },

  button: {
    width: width * 0.8,
    height: height * 0.07,
    marginVertical: height * 0.01,
    alignSelf: "center",
    marginTop: height * 0.18,
  },
  gradient: {
    height: height * 0.07,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    elevation: 9,
  },
  buttontext: {
    color: "white",
    fontSize: width * 0.05,
    textAlign: "center",
  },
  LastText: {
    alignItems: "center",
    marginTop: height * 0.08,
    flexDirection: "row",
    justifyContent: "center",
  },
  textone: {
    fontSize: width * 0.04,
    color: "#A3A3A3",
  },
  texttwo: {
    fontSize: width * 0.032,
    fontWeight: "bold",
    marginLeft: width * 0.01,
    color: "#3A3A3A",
  },
});

export default LoginPage;
