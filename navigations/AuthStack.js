import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

//App Screens

import FirstScreen from "../screens/FirstScreen";
import LoadingScreen from "../screens/LoadingScreen";
import LoginPage from "../screens/LoginPage";
import SignupPage from "../screens/SignupPage";
import HomeScreen from "../screens/HomeScreen";

import FeaturedScreen from "../screens/FeaturedScreen";
import CartScreen from "../screens/CartScreen";
import AddressScreen from "../screens/AddressScreen";
import CreateAddress from "../screens/Create_Address";
import PaymentScreen from "../screens/PaymentScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import ConfirmationScreen from "../screens/ConfirmationScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="LoadingScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="FeaturedScreen" component={FeaturedScreen} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
