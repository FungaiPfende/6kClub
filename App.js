import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Home } from "./src/screens/Home.screen";
import { Header } from "./src/components/Header.component";

import { colours, space } from "./src/constants/theme";

const News = ({ route }) => (
  <SafeAreaView style={styles.screen}>
    <Header title={route.name} />
  </SafeAreaView>
);

const Library = ({ route }) => (
  <SafeAreaView style={styles.screen}>
    <Header title={route.name} />
  </SafeAreaView>
);

const Shop = ({ route }) => (
  <SafeAreaView style={styles.screen}>
    <Header title={route.name} />
  </SafeAreaView>
);

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "Home") {
      iconName = focused ? "home" : "home-outline";
    } else if (route.name === "News") {
      iconName = focused ? "newspaper" : "newspaper-outline";
    } else if (route.name === "Library") {
      iconName = focused ? "library" : "library-outline";
    } else if (route.name === "Shop") {
      iconName = focused ? "cart" : "cart-outline";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: colours.brand.primary,
  tabBarInactiveTintColor: colours.ui.secondary,
  headerShown: false,
});

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
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="News" component={News} />
          <Tab.Screen name="Library" component={Library} />
          <Tab.Screen name="Shop" component={Shop} />
        </Tab.Navigator>
      </NavigationContainer>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  screen: {
    marginHorizontal: space.lg,
  },
});
