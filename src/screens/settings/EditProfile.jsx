import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const EditProfile = () => {
  const { isDarkMode, setDarkMode } = React.useContext(DarkModeContext);
  const navigate = useNavigation();
  return (
    <View
      className={`px-3 py-10 flex-1 ${
        isDarkMode === "light" ? "bg-slate-200" : "bg-black/90"
      }`}
    >
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
    </View>
  );
};

export default EditProfile;
