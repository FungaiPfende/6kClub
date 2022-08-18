import { SafeAreaView, StyleSheet, Text } from "react-native";
import { space } from "../constants/theme";

export const Profile = () => (
  <SafeAreaView style={styles.screen}>
    <Text>Profile Screen</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: space.lg,
  },
});
