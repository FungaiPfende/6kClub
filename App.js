import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";

import { AppNavigator } from "./src/constants/navigation/App.navigator";

export default function App() {
  const [loaded] = useFonts({
    AvenirLight: require("./assets/fonts/AvenirLTProLight.otf"),
    AvenirBook: require("./assets/fonts/AvenirLTProBook.otf"),
    AvenirMedium: require("./assets/fonts/AvenirLTProMedium.otf"),
    AvenirHeavy: require("./assets/fonts/AvenirLTProHeavy.otf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <AppNavigator />

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
