import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { DarkModeContext } from "../../context/DarkModeContext";

const NewsCard = ({ data }) => {
  const { isDarkMode } = React.useContext(DarkModeContext);

  const navigate = useNavigation();
  const RenderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigate.navigate("NewsDetail")}>
      <View className="my-2 w-full  ">
        <View className="flex-row gap-2    ">
          <Image
            className="h-28 w-28 rounded-md"
            source={{ uri: item.image }}
          />
          <View className=" w-[64vw] ">
            <Text numberOfLines={2} className={`text-lg ${isDarkMode==="dark"?"text-white/70":"text-black"}`}>
              {item.title}
            </Text>
            <Text className={`py-2 text-sm ${isDarkMode==="dark"?"text-white/70":"text-black"}`} numberOfLines={2}>
              {item.description}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data?.slice(0, 4)} // Slice the data array to only include the first 4 items
      renderItem={({ item }) => <RenderItem item={item} />}
      keyExtractor={(item) => item.id} // Replace with your unique key
    />
  );
};

export default NewsCard;
