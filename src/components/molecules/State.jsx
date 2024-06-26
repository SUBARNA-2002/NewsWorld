import { View, Text, TouchableOpacity } from "react-native";

import { LogBox } from "react-native";
import Card from "../atoms/Card";
import { useNavigation } from "@react-navigation/native";
import { DarkModeContext } from "../../context/DarkModeContext";
import React from "react";

const State = ({data}) => {
  LogBox.ignoreLogs(["ViewPropTypes"]);
  const { isDarkMode } = React.useContext(DarkModeContext);
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
  // console.log("Data====>>>>",data)
  const navigate = useNavigation();

  return (
    <View className="py-1 px-3">
      <View className="flex-row justify-between items-center">
      <Text className={`text-2xl font-medium ${isDarkMode==="dark"?"text-white/70":"text-black"}`}>
          <Text className="text-red-600">State</Text> News
        </Text>
        <TouchableOpacity onPress={() => navigate.navigate('NewsList', {data: data,heading:'State'})}>
          <Text className="text-md text-zinc-500">See all</Text>
        </TouchableOpacity>
      </View>
      <View className="py-3">
        {/* <TrendingCarousel data={data} /> */}
        <Card data={data?.slice(0,4)} />
      </View>
    </View>
  );
};

export default State;
