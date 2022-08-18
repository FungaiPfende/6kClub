import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

import {
  assets,
  colours,
  fonts,
  fontSizes,
  sizes,
  space,
} from "../constants/theme";

export const Header = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={assets.sixKC_logo}
        resizeMode="contain"
        style={styles.logo}
      />

      <View styles={styles.midSection}>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>{title}</Text>
        </View>

        <View style={styles.dot} />
      </View>

      <Pressable onPress={() => navigation.navigate("Profile")}>
        <Image
          source={assets.userProfile}
          resizeMode="contain"
          style={styles.profile}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: space.md,
  },

  logo: {
    width: 50,
    height: 25,
  },

  midSection: {
    flexDirection: "column",
    justifyContent: "center",
  },

  textContainer: {
    backgroundColor: colours.ui.black,
    width: 120,
    height: 40,
    borderRadius: sizes.xxl,
    justifyContent: "center",
  },

  headerText: {
    paddingTop: sizes.sm,
    color: colours.text.white,
    fontFamily: fonts.bold,
    fontSize: fontSizes.h5 + 3,
    textAlign: "center",
  },

  dot: {
    width: sizes.md,
    height: sizes.md,
    backgroundColor: colours.brand.primary,
    borderRadius: sizes.lg,
    position: "absolute",
    left: "50%",
    top: "130%",
  },

  profile: {
    width: 40,
    height: 40,
    borderRadius: sizes.xl,
    borderColor: colours.brand.primary,
    borderWidth: sizes.sm,
  },
});
