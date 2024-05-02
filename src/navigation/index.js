import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DarkModeContext, DarkModeProvider } from "../context/DarkModeContext";
import { useColorScheme } from "nativewind";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import BookMarkScreen from "../screens/BookMarkScreen";
import ProfileScreen from "../screens/ProfileScreen";
import NewsDetailsScreen from "../screens/NewsDetailsScreen";
import SpalshScreen from "../screens/SpalshScreen";
import Welcome from "../screens/Welcome";
import Ionicons from "react-native-vector-icons/Ionicons";
import NewsList from "../screens/NewsList";
import VideoScreen from "../screens/VideoScreen";
import DarkMode from "../screens/settings/DarkMode";
import EditProfile from "../screens/settings/EditProfile";
import Language from "../screens/settings/Language";
// import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  // const colorScheme = useColorScheme();
  // const isDarkMode = colorScheme === 'dark';
  const { isDarkMode } = React.useContext(DarkModeContext);

  const TabNavigation = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Video") {
              iconName = focused ? "videocam-sharp" : "videocam-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person-sharp" : "person-outline";
            }

            return <Ionicons name={iconName} size={25} color={color} />;
          },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: "black",
            height: 60,
            paddingTop: 0, // Add padding to the top
            paddingBottom: 5,
            // shadowColor: "white",
          },
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Video"
          component={VideoScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <DarkModeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          // screenOptions={{
          //   headerShown: false,
          // }}
        >
          {/* <Stack.Screen name="Spalsh" component={SpalshScreen} /> */}
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="BookMark" component={BookMarkScreen} />
          <Stack.Screen
            name="HomeTabs"
            component={TabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetailsScreen}
            options={{ animation: "slide_from_bottom", headerShown: false }}
          />
          <Stack.Screen
            name="NewsList"
            component={NewsList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="darkmode"
            component={DarkMode}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="editprofile"
            component={EditProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="bookmark"
            component={BookMarkScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="language"
            component={Language}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DarkModeProvider>
  );
};

export default AppNavigation;
