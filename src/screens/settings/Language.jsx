import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DarkModeContext } from "../../context/DarkModeContext";
import { FontAwesome } from "@expo/vector-icons";

const Language = () => {
  const navigate = useNavigation();
  const { isDarkMode, setDarkMode } = React.useContext(DarkModeContext);
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
      <View className='space-y-2'>
        <View className={`flex-row justify-between items-center  py-2 px-3 rounded-lg ${isDarkMode==='dark'?"bg-white/20":"bg-black/20"} `}>
          <Text
            className={`text-xl ${
              isDarkMode === "light" ? "text-black" : "text-white/80"
            }`}
          >
            Hindi
          </Text>
          <TouchableOpacity>
            {isDarkMode === "light" ? (
              <FontAwesome name="toggle-off" size={30} color="black" />
            ) : (
              <FontAwesome name="toggle-on" size={30} color="white" />
            )}
          </TouchableOpacity>
        </View>
        <View className={`flex-row justify-between items-center  py-2 px-3 rounded-lg ${isDarkMode==='dark'?"bg-white/20":"bg-black/20"} `}>
          <Text
            className={`text-xl ${
              isDarkMode === "light" ? "text-black" : "text-white/80"
            }`}
          >
            Oriya
          </Text>
          <TouchableOpacity>
            {isDarkMode === "light" ? (
              <FontAwesome name="toggle-off" size={30} color="black" />
            ) : (
              <FontAwesome name="toggle-on" size={30} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Language;
