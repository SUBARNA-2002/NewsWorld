import { View, Text, SafeAreaView, ScrollView, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import NavHeader from "../components/molecules/NavHeader";
import HeadLines from "../components/molecules/HeadLines";
import TrendingNews from "../components/molecules/TrendingNews";
import International from "../components/molecules/International";
import State from "../components/molecules/State";
import { DarkModeContext } from "../context/DarkModeContext";
const HomeScreen = () => {
  // const { isDarkMode } = route.params;
  const { isDarkMode } = React.useContext(DarkModeContext);

  const data = [
    {
      name: "Trending News",
      component: <TrendingNews />,
    },
    {
      name: "International",
      component: <International />,
    },
    {
      name: "State",
      component: <State />,
    },
  ];
  return (
    <View className={`py-10 ${isDarkMode==='dark'?"bg-black/90":"bg-slate-200"} `}>
      <View className=" px-3  py-1 ">
        <View className=" flex-row justify-between items-center px-1 ">
          <View className="bg-white  px-2 py-2 shadow-md rounded-md">
            <Ionicons name="menu-sharp" size={30} color="black" />
          </View>
          <View>
            <Text className="text-2xl font-bold">LOGO</Text>
          </View>
          <View className="bg-white px-2 py-2 shadow-md rounded-md">
            <Ionicons name="notifications-outline" size={30} color="black" />
          </View>
        </View>
      </View>
      <View>
        <NavHeader />
      </View>
      <View className="flex-row items-center">
        <HeadLines />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => item.component}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default HomeScreen;
