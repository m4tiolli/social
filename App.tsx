import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Profile from "./src/Screens/Profile";
import { useColorScheme } from "nativewind";

const Tab = createBottomTabNavigator();

function Tabs() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colorScheme == "light" ? "#18181b" : "#a1a1aa",
        tabBarInactiveTintColor: colorScheme == "light" ? "#3f3f46" : "#e4e4e7",
        tabBarStyle: {
          backgroundColor: colorScheme == "light" ? "#fff" : "#18181b",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: (tabInfo) => {
            return <Octicons name="home" color={tabInfo.color} size={20} />;
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <FontAwesome
                name="user-circle-o"
                color={tabInfo.color}
                size={20}
              />
            );
          },
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
