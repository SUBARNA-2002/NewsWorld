import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
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
            } else if (route.name === "BookMark") {
              iconName = focused ? "bookmarks" : "bookmarks-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person-sharp" : "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "black",
          tabBarStyle: { display: "flex" },
          tabBarShowLabel: false, // This line hides the tab labels

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
          name="BookMark"
          component={BookMarkScreen}
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
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Spalsh"
        // screenOptions={{
        //   headerShown: false,
        // }}
      >
        <Stack.Screen name="Spalsh" component={SpalshScreen} />
        <Stack.Screen name="Welcome" component={Welcome}  />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="HomeTabs" component={TabNavigation} options={{headerShown:false}} />
        <Stack.Screen
          name="NewsDetail"
          component={NewsDetailsScreen}
          options={{ animation: "slide_from_bottom" ,headerShown:false}}
        />
        <Stack.Screen name="NewsList" component={NewsList} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
