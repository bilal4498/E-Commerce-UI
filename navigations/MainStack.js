import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

//App Screens
import HomeScreen from "../screens/HomeScreen";
import FeaturedScreen from "../screens/FeaturedScreen";
import CartScreen from "../screens/CartScreen";
import AddressScreen from "../screens/AddressScreen";
import CreateAddress from "../screens/Create_Address";
import PaymentScreen from "../screens/PaymentScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import ConfirmationScreen from "../screens/ConfirmationScreen";
import ProfileScreen from "../screens/ProfileScreen";

import FavoriteScreen from "../screens/FavoriteScreen";
import MenuScreen from "../screens/MenuScreen";
import FirstScreen from "../screens/FirstScreen";
import LoadingScreen from "../screens/LoadingScreen";
import LoginPage from "../screens/LoginPage";
import MyOrderScreen from "../screens/MyOrderScreen";
import SignupPage from "../screens/SignupPage";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FeaturedScreen" component={FeaturedScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="AddressScreen" component={AddressScreen} />
        <Stack.Screen name="CreateAddress" component={CreateAddress} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
        <Stack.Screen
          name="ConfirmationScreen"
          component={ConfirmationScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
