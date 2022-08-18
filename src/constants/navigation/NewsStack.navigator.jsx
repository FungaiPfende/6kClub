import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { News } from "../../screens/News.screen";
import { Profile } from "../../screens/Profile.screen";

const Stack = createNativeStackNavigator();

export const NewsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="NewsStackScreen" component={News} />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: true }}
    />
  </Stack.Navigator>
);
