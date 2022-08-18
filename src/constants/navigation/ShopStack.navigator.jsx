import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Shop } from "../../screens/Shop.screen";
import { Profile } from "../../screens/Profile.screen";

const Stack = createNativeStackNavigator();

export const ShopStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ShopStackScreen" component={Shop} />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: true }}
    />
  </Stack.Navigator>
);
