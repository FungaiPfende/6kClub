import { SafeAreaView, StyleSheet, Text } from "react-native";
import { space } from "../constants/theme";

import { Header } from "../components/Header.component";

export const Library = () => (
  <SafeAreaView style={styles.screen}>
    <Header title="Library" />
    <Text>Library Screen</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: space.lg,
  },
});
