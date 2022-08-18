import { SafeAreaView, StyleSheet, Text } from "react-native";
import { space } from "../constants/theme";

import { Header } from "../components/Header.component";

export const News = ({ navigation }) => (
  <SafeAreaView style={styles.screen}>
    <Header title="News" navigation={navigation} />
    <Text>News Screen</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: space.lg,
  },
});
