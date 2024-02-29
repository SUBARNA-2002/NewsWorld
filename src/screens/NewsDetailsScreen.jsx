import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const NewsDetailsScreen = () => {
  const navigate = useNavigation();

  return (
    <ScrollView className="mt-10 px-3">
      <View className="flex-row justify-between">
        <View>
          <TouchableOpacity onPress={() => navigate.goBack()}>
            <Ionicons name="arrow-back-outline" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="py-2">
        <Text className="text-2xl font-semibold">
          The best way to invest in stocks The best way to invest in stocks
        </Text>
        <View className="flex-row justify-between items-center mt-4 ">
          <Text className="px-2 py-1 bg-red-600 text-white rounded">State</Text>

          <View className="flex-row gap-3">
            <Text className="text-sm text-zinc-500 font-medium">Admin</Text>
            <Text className="text-sm text-zinc-500 font-medium">
              29-02-2024
            </Text>
          </View>
        </View>
        <View className="h-[50vh] w-full mt-5 ">
          <Image
            style={{ height: "100%", width: "100%", objectFit: "fill" }}
            source={{
              uri: "https://www.maharaniwomen.com/wp-content/uploads/2021/09/A2.jpg",
            }}
          />
        </View>
        <Text className="py-4 text-lg text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus
          obcaecati nostrum saepe voluptatem minus autem perferendis sint nulla,
          quas rerum iure ad voluptatibus. Quaerat, velit! Ipsa perferendis eos
          enim? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
          doloremque, maxime nesciunt asperiores similique qui cupiditate eos
          laborum minus doloribus!
        </Text>
      </View>
    </ScrollView>
  );
};

export default NewsDetailsScreen;
