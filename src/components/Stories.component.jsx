import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { fonts, fontSizes, space, assets } from "../constants/theme";

import { Story } from "./Story.component";

export const Stories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Design Stories</Text>

      <View style={styles.cardContainer}>
        <Story img={assets.story01} title="Story title 1" />
        <Story img={assets.story02} title="Story title 2" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: space.xl,
  },

  title: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.h5,
    marginBottom: space.lg,
  },

  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
