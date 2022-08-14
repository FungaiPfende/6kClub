import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import {
  assets,
  colours,
  fonts,
  fontSizes,
  shadows,
  sizes,
  space,
} from "../constants/theme";

import { Icon } from "./Icon.component";

export const WebinarCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardCover}>
        <LinearGradient colors={["transparent", "black"]} style={{ zIndex: 1 }}>
          <Image
            source={assets.webinar}
            resizeMode="cover"
            style={styles.cardImage}
          />
          <Text style={styles.webinarTitle}>
            6k.creatives{"\n"}live webinar
          </Text>
        </LinearGradient>
      </View>

      <View style={styles.info}>
        <View style={styles.watchNow}>
          <Text style={styles.watchNowText}>Watch Now</Text>

          <Icon
            iconName="videocam-outline"
            iconColour="white"
            bgColour={colours.ui.success}
            radius={sizes.lg}
          />
        </View>
        <View style={styles.divider} />

        <View style={styles.upcomingWebinars}>
          <Icon
            iconName="calendar-outline"
            iconColour="white"
            bgColour={colours.ui.error}
            radius={sizes.xxl}
            bgWidth={50}
            bgHeight={50}
          />
          <Text style={styles.upcomingText}>Upcoming {"\n"} webinars</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colours.bg.primary,
    borderRadius: sizes.lg,
    marginHorizontal: space.lg,
    marginVertical: space.xl + 10,
    ...shadows.light,
  },

  cardCover: {
    width: "100%",
    height: 250,
    borderTopLeftRadius: sizes.lg,
    borderTopRightRadius: sizes.lg,
  },

  cardImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: sizes.lg,
    borderTopRightRadius: sizes.lg,
  },

  webinarTitle: {
    position: "absolute",
    top: "70%",
    color: colours.text.white,
    fontFamily: fonts.bold,
    fontSize: fontSizes.h4,
    marginHorizontal: space.lg,
    ...shadows.dark,
  },

  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: space.lg,
    marginHorizontal: space.lg,
  },

  watchNow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
  },

  watchNowText: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.h5,
  },

  divider: {
    borderWidth: 1,
    borderColor: colours.ui.tertiary,
    height: sizes.xxl,
  },

  upcomingWebinars: {
    alignItems: "center",
    marginTop: -space.xxl,
    width: "auto",
  },

  upcomingText: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.body,
    color: colours.text.secondary,
    marginTop: space.sm,
  },
});
