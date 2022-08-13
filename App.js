import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

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
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
