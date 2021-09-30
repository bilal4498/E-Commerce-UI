import "react-native-gesture-handler";
import React, { useState } from "react";

// navigation imp
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./navigations/AuthStack";
import MainStack from "./navigations/MainStack";

import FeaturedScreen from "./screens/FeaturedScreen";
import ItemDetailsScreen from "./screens/ItemDetailsScreen";
import PaymentScreen from "./screens/PaymentScreen";
import CartScreen from "./screens/CartScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import MenuScreen from "./screens/MenuScreen";
import MyOrderScreen from "./screens/MyOrderScreen";

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
