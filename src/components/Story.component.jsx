import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import {
  shadows,
  sizes,
  fonts,
  fontSizes,
  space,
  colours,
} from "../constants/theme";

export const Story = ({ img, title }) => {
  return (
    <View style={styles.card}>
      <Image source={img} resizeMode="cover" style={styles.cardImage} />

      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 250,
    width: "45%",
    backgroundColor: "gray",
    borderRadius: sizes.lg,
  },

  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: sizes.lg,
  },

  cardTitle: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.h5,
    position: "absolute",
    top: "75%",
    color: colours.text.white,
    marginHorizontal: space.lg,
    ...shadows.dark,
  },
});
