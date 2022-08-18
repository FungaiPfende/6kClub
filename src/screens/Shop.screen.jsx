import { SafeAreaView, StyleSheet, Text } from "react-native";
import { space } from "../constants/theme";

import { Header } from "../components/Header.component";

export const Shop = ({ navigation }) => (
  <SafeAreaView style={styles.screen}>
    <Header title="Shop" navigation={navigation} />
    <Text>Shop Screen</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: space.lg,
  },
});
