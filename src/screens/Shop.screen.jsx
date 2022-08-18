import { SafeAreaView, StyleSheet, Text } from "react-native";
import { space } from "../constants/theme";

import { Header } from "../components/Header.component";

export const Shop = ({ route }) => (
  <SafeAreaView style={styles.screen}>
    <Header title={route.name} />
    <Text>Shop Screen</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: space.lg,
  },
});
