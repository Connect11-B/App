import { HomeScreen } from "@features/home/screen/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "@shared/constants/routes";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={ROUTES.Home} screenOptions={{ headerShown: false }}>
      <Tab.Screen name={ROUTES.Home} component={HomeScreen} />
    </Tab.Navigator>
  );
};
