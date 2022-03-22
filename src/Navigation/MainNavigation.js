import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../../assets/colors";
import { HomeScreen, ArticleScreen } from "../screens";
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: "Articles",
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitleStyle: { color: COLORS.white },
        }}
      />
      <Stack.Screen name="ArticleScreen" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
