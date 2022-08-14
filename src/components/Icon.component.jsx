import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import { colours, sizes } from "../constants/theme";

export const Icon = ({
  iconName,
  iconSize = 32,
  iconColour,
  bgColour,
  radius,
  bgWidth = 60,
  bgHeight = 40,
}) => {
  return (
    <View style={styles(radius, bgColour, bgWidth, bgHeight).icon}>
      <Ionicons name={iconName} size={iconSize} color={iconColour} />
    </View>
  );
};

const styles = (radius, bgColour, bgWidth, bgHeight) =>
  StyleSheet.create({
    icon: {
      backgroundColor: bgColour,
      width: bgWidth,
      height: bgHeight,
      borderRadius: radius,
      alignItems: "center",
      justifyContent: "center",
      // marginTop: -sizes.xl - 15,
    },
  });
