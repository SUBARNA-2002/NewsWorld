import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useNavigation } from "@react-navigation/native";

const UserDetail = () => {
  const { isDarkMode } = React.useContext(DarkModeContext);
  const navigate = useNavigation();
  return (
    <View>
      <View className="flex-row justify-center ">
        <View className="h-32 w-32 rounded-full bg-black/10">
          <Image
            className="h-[100%] w-[100%] object-fill rounded-full "
            source={{
              uri: "https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg",
            }}
          />
        </View>
      </View>
      {/* <Text
        className={` text-center text-2xl pt-3 font-medium ${
          isDarkMode === "dark" ? "text-white/70" : "text-black"
        }`}
      >
        Subarna Keshari Sutar
      </Text>
      <Text
        className={`text-center text-lg  ${
          isDarkMode === "dark" ? "text-white/70" : "text-black"
        }`}
      >
        subarna.sutar@squbix.com
      </Text> */}
      <View className="flex-row justify-center py-5">
        <TouchableOpacity
        // onPress={() => navigate.navigate("editprofile")}
        >
          <Text className="w-[45vw] py-3  rounded-3xl bg-red-500 text-white text-center text-xl">
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="h-[1px]  bg-black/10 my-3 mx-3" />
    </View>
  );
};

export default UserDetail;
