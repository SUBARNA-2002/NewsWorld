import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import NewsCard from "../components/atoms/NewsCard";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DarkModeContext } from "../context/DarkModeContext";
const NewsList = ({ route }) => {
  const { data, heading } = route.params;
  const navigate = useNavigation();
  const { isDarkMode } = React.useContext(DarkModeContext);
  return (
    <View
      className={`py-10 flex-1 px-3 ${
        isDarkMode === "dark" ? "bg-black/90" : " bg-slate-200"
      }
    `}
    >
      <View className="flex-row justify-between items-center py-2">
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color={isDarkMode === "light" ? "black" : "white"}
          />
        </TouchableOpacity>
        <Text
          className={`text-2xl font-medium ${
            isDarkMode === "dark" ? "text-white/70" : "text-black"
          }`}
        >
          <Text className="text-red-600">{heading}</Text> News
        </Text>
        <Text></Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const RenderItem = ({ item }) => {
  const navigate = useNavigation();
  const { isDarkMode } = React.useContext(DarkModeContext);

  return (
    <TouchableOpacity onPress={() => navigate.navigate("NewsDetail")}>
      <View className="my-2 w-full  ">
        <View className="flex-row gap-2    ">
          <Image
            className="h-28 w-28 rounded-md"
            source={{ uri: item.image }}
          />
          <View className=" w-[64vw] ">
            <Text
              numberOfLines={2}
              className={`text-xl  ${
                isDarkMode === "dark" ? "text-white/70" : "text-black"
              }`}
            >
              {item.title}
            </Text>
            <Text
              className={`py-2 text-sm ${
                isDarkMode === "dark" ? "text-white/70" : "text-black"
              } `}
              numberOfLines={2}
            >
              {item.description}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsList;
