import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NewsCard from "../atoms/NewsCard";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DarkModeContext } from "../../context/DarkModeContext";

const International = ({ data }) => {
  const { isDarkMode } = React.useContext(DarkModeContext);

  const navigate = useNavigation();

  // const data = [
  //   {
  //     title: "The best way to invest in stocks",
  //     description:
  //       "Stocks are a great way to invest your money. Here are some tips to get you started.",
  //     image:
  //       "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
  //   },
  //   {
  //     title: "The best way to invest in stocks",
  //     description:
  //       "Stocks are a great way to invest your money. Here are some tips to get you started.",
  //     image:
  //       "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
  //   },
  //   {
  //     title: "The best way to invest in stocks",
  //     description:
  //       "Stocks are a great way to invest your money. Here are some tips to get you started.",
  //     image:
  //       "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
  //   },
  //   {
  //     title: "The best way to invest in stocks",
  //     description:
  //       "Stocks are a great way to invest your money. Here are some tips to get you started.",
  //     image:
  //       "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
  //   },
  // ];
  return (
    <View className="px-3">
      <View className="flex-row justify-between items-center">
        <Text
          className={`text-2xl font-medium ${
            isDarkMode === "dark" ? "text-white/70" : "text-black"
          }`}
        >
          <Text className="text-red-600">International</Text> News
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigate.navigate("NewsList", {
              data: data,
              heading: "International",
            })
          }
        >
          <Text className="text-md text-zinc-500">See all</Text>
        </TouchableOpacity>
      </View>
      <View className="py-3">
        <NewsCard data={data?.slice(4, 8)} />
      </View>
    </View>
  );
};

export default International;

const styles = StyleSheet.create({});
