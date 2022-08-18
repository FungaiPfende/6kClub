import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Library } from "../../screens/Library.screen";
import { Profile } from "../../screens/Profile.screen";

const Stack = createNativeStackNavigator();

export const LibraryStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="LibraryStackScreen" component={Library} />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: true }}
    />
  </Stack.Navigator>
);
