import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { DarkModeContext } from "../../context/DarkModeContext";
const DarkMode = () => {
  const navigate = useNavigation();
  const { isDarkMode, setDarkMode } = React.useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };
  // console.warn("isDarkMode", isDarkMode)
  return (
    <View
      className={`px-3 py-10 flex-1 ${
        isDarkMode === "light" ? "bg-slate-200" : "bg-black/90"
      }`}
    >
      <View className="flex-row justify-between items-center py-2">
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color={isDarkMode === "light" ? "black" : "white"}
          />
        </TouchableOpacity>
        <Text className="text-2xl font-medium text-center">
          {/* <Text>Dark Mode</Text> */}
        </Text>
        <Text></Text>
      </View>
      <View>
        <View className="flex-row justify-between items-center">
          <Text
            className={`text-xl ${
              isDarkMode === "light" ? "text-black" : "text-white/80"
            }`}
          >
            Dark Mode
          </Text>
          <TouchableOpacity onPress={toggleDarkMode}>
            {isDarkMode === "light" ? (
              <FontAwesome name="toggle-off" size={30} color="black" />
            ) : (
              <FontAwesome name="toggle-on" size={30} color="white" />
            )}
          </TouchableOpacity>
        </View>
        <Text
          className={`text-md py-2 ${
            isDarkMode === "light" ? "text-black" : "text-white/80"
          }`}
        >
          Dark mode is a feature that lets you switch the color theme of an app
          from a light mode to a dark one. It's often used to reduce eye strain,
          save battery power, and improve readability.
        </Text>
      </View>
    </View>
  );
};

export default DarkMode;
