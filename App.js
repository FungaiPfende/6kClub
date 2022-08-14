import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";

import { Home } from "./src/screens/Home.screen";

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
    <View>
      <Home />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({});
