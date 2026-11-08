import { Login, Signup } from "@features/auth/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "@shared/constants/routes";

const Stack = createNativeStackNavigator();

export const RootStackNavigator = () => (
  <Stack.Navigator initialRouteName={ROUTES.Login} screenOptions={{ headerShown: false }}>
    {/** TODO: 앱 시작 시 로그인 세션 토큰 검사하는 코드 작성 필요
    <Stack.Screen name={ROUTES.Launching} component={} /> */}
    <Stack.Screen name={ROUTES.Login} component={Login} />
    <Stack.Screen name={ROUTES.Signup} component={Signup} />
    {/* <Stack.Screen name={ROUTES.Main} component={BottomTabNavigator} /> */}
  </Stack.Navigator>
);
