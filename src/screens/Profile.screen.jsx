import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  assets,
  colours,
  fonts,
  fontSizes,
  sizes,
  space,
} from "../constants/theme";

export const Profile = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.userInfo}>
        <>
          <Image
            source={assets.userProfile}
            resizeMode="contain"
            style={styles.profilePic}
          />
          <View style={styles.edit}>
            <Ionicons name="pencil" size={24} color={colours.brand.primary} />
          </View>
        </>

        <Text style={styles.name}>Munashe Matewu</Text>
        <Text style={styles.username}>@boy.glory</Text>

        <View style={styles.userStats}>
          <Text style={styles.statsText}>
            Following{"\n"} <Text style={styles.stat}>29</Text>
          </Text>
          <Text style={styles.statsText}>
            Followers{"\n"} <Text style={styles.stat}>253</Text>
          </Text>
          <Text style={styles.statsText}>
            Projects{"\n"} <Text style={styles.stat}>47</Text>
          </Text>
        </View>
      </View>

      <View style={styles.projectsContainer}>
        <View style={styles.projectsHeader}>
          <Text style={styles.headerText}>Projects</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.bg.secondary,
  },

  userInfo: {
    alignItems: "center",
    marginHorizontal: space.lg,
    marginVertical: space.lg,
  },

  profilePic: {
    marginBottom: space.lg,
    borderRadius: sizes.xxxl,
    borderWidth: sizes.md,
    borderColor: colours.brand.primary,
    width: 150,
    height: 150,
  },

  name: {
    color: colours.text.primary,
    fontFamily: fonts.bold,
    fontSize: fontSizes.h5,
    marginBottom: space.sm,
  },

  edit: {
    position: "absolute",
    bottom: 130,
    right: 110,
    backgroundColor: colours.bg.primary,
    width: 40,
    height: 40,
    borderRadius: sizes.xxxl,
    justifyContent: "center",
    alignItems: "center",
  },

  username: {
    color: colours.text.secondary,
    fontFamily: fonts.regular,
    fontSize: fontSizes.body,
    marginBottom: space.sm,
  },

  userStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: space.lg,
    width: "90%",
  },

  statsText: {
    color: colours.text.primary,
    textAlign: "center",
    fontFamily: fonts.bold,
    fontSize: fontSizes.body,
  },

  stat: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.button,
    color: colours.text.secondary,
  },

  projectsContainer: {
    marginVertical: space.lg,
    marginHorizontal: space.lg,
  },

  projectsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: space.lg,
  },

  headerText: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.h5,
  },

  seeAllText: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.body,
    textDecorationLine: "underline",
    color: colours.text.secondary,
  },
});
