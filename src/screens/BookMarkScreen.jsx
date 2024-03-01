import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";

const BookMarkScreen = () => {
  const { isDarkMode, setDarkMode } = React.useContext(DarkModeContext);
  const navigate = useNavigation();
  const data = [
    {
      title: "The best way to invest in stocks",
      description:
        "Stocks are a great way to invest your money. Here are some tips to get you started.",
      image:
        "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
    },
    {
      title: "The best way to invest in stocks",
      description:
        "Stocks are a great way to invest your money. Here are some tips to get you started.",
      image:
        "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
    },
    {
      title: "The best way to invest in stocks",
      description:
        "Stocks are a great way to invest your money. Here are some tips to get you started.",
      image:
        "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
    },
    {
      title: "The best way to invest in stocks",
      description:
        "Stocks are a great way to invest your money. Here are some tips to get you started.",
      image:
        "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
    },
  ];
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
        <Text
          className={`text-2xl font-medium text-center ${
            isDarkMode === "light" ? "text-black" : "text-white/80"
          }`}
        >
         <Text className='text-red-600'>Bookmarks</Text>  News
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

export default BookMarkScreen;
