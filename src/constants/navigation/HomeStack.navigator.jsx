import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../../screens/Home.screen";
import { Profile } from "../../screens/Profile.screen";

const Stack = createNativeStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeStackScreen" component={Home} />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: true }}
    />
  </Stack.Navigator>
);
