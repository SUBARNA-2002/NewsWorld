import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import UserDetail from "../components/molecules/UserDetail";
import Btn from "../components/atoms/Btn";
import { useNavigation } from "@react-navigation/native";
import { DarkModeContext } from "../context/DarkModeContext";

const ProfileScreen = () => {
  const { isDarkMode } = React.useContext(DarkModeContext);

  const navigate = useNavigation();
  return (
    <View
      className={`py-16 flex-1 px-3 ${
        isDarkMode === "dark" ? "bg-black/90" : "bg-slate-200"
      }`}
    >
      <UserDetail />
      <View>
        <Btn icon="settings" title="Settings" />
        <TouchableOpacity onPress={() => navigate.navigate("bookmark")}>
          <Btn icon="bookmark" title="Bookmarks" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate.navigate("darkmode")}>
          <Btn icon="moon" title="Dark Mode" />
        </TouchableOpacity>
        <TouchableOpacity>

        <Btn icon="file-text" title="Language" />
        </TouchableOpacity>
        {/* <Btn icon="key" title="Change Password" /> */}
        {/* <Btn icon="log-out" title="Logout" /> */}
      </View>
    </View>
  );
};

export default ProfileScreen;
