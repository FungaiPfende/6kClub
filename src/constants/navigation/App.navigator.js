import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { HomeStack } from "./HomeStack.navigator";
import { NewsStack } from "./NewsStack.navigator";
import { LibraryStack } from "./LibraryStack.navigator";
import { ShopStack } from "./ShopStack.navigator";

import { colours } from "../theme";

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "Home") {
      iconName = focused ? "home" : "home-outline";
    } else if (route.name === "News") {
      iconName = focused ? "newspaper" : "newspaper-outline";
    } else if (route.name === "Library") {
      iconName = focused ? "library" : "library-outline";
    } else if (route.name === "Shop") {
      iconName = focused ? "cart" : "cart-outline";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: colours.brand.primary,
  tabBarInactiveTintColor: colours.ui.secondary,
  headerShown: false,
});

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="News" component={NewsStack} />
        <Tab.Screen name="Library" component={LibraryStack} />
        <Tab.Screen name="Shop" component={ShopStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
