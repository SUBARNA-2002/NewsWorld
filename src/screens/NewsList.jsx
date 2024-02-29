import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import NewsCard from "../components/atoms/NewsCard";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const NewsList = ({ route }) => {
  const { data, heading } = route.params;
  const navigate = useNavigation();
  return (
    <View className="mt-10 px-3">
      <View className="flex-row justify-between items-center py-2">
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-2xl font-medium text-center">
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
  return (
    <TouchableOpacity onPress={() => navigate.navigate("NewsDetail")}>
      <View className="my-2 w-full  ">
        <View className="flex-row gap-2    ">
          <Image
            className="h-28 w-28 rounded-md"
            source={{ uri: item.image }}
          />
          <View className=" w-[64vw] ">
            <Text numberOfLines={2} className="text-lg">
              {item.title}
            </Text>
            <Text className="py-2 text-sm" numberOfLines={2}>
              {item.description}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsList;
