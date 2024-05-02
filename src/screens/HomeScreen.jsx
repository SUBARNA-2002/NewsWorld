import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  ActivityIndicator,
  LogBox,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import NavHeader from "../components/molecules/NavHeader";
import HeadLines from "../components/molecules/HeadLines";
import TrendingNews from "../components/molecules/TrendingNews";
import International from "../components/molecules/International";
import State from "../components/molecules/State";
import { DarkModeContext } from "../context/DarkModeContext";
import axios from "axios";
const HomeScreen = () => {
  // const { isDarkMode } = route.params;
  const { isDarkMode } = React.useContext(DarkModeContext);
  const [newsData, setNewsData] = useState([]);
  const [internationalNews, setinternationalNews] = useState([]);
  const [stateNews, setStateNews] = useState([]);
  const [loader, setLoader] = useState(false);
  // const API = "615607a761f14650b30bbd7f73bc53cc";
  // LogBox.ignoreLogs();
  LogBox.ignoreLogs(['Each child in a list should have a unique "key" prop']);
  const getNewData = async () => {
    try {
      setLoader(true);
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=615607a761f14650b30bbd7f73bc53cc"
      );
      if (res?.data?.articles) {
        setNewsData(res?.data?.articles);
        setLoader(false);
      }
    } catch (e) {
      console.log(e, "error in fetching news data");
    }
  };

  const getInternationalNewsData = async () => {
    try {
      const res = await axios.get(
        "https://newsapi.org/v2/everything?q=international&apiKey=615607a761f14650b30bbd7f73bc53cc"
      );
      setinternationalNews(res?.data?.articles);
    } catch (e) {
      console.log(e, "error in fetching news data");
    }
  };

  const getStateNewsData = async () => {
    try {
      const res = await axios.get(
        "https://newsapi.org/v2/everything?q=state&apiKey=615607a761f14650b30bbd7f73bc53cc"
      );
      setStateNews(res?.data?.articles);
    } catch (e) {
      console.log(e, "error in fetching news data");
    }
  };

  useEffect(() => {
    getNewData();
    getInternationalNewsData();
    getStateNewsData();
  }, []);
  // console.log("newsData=====>>>>>", newsData);

  const data = [
    {
      name: "Trending News",
      component: <TrendingNews data={newsData} />,
    },
    {
      name: "International",
      component: <International data={internationalNews} />,
    },
    {
      name: "State",
      component: <State data={stateNews} />,
    },
  ];
  return (
    <View
      style={{ paddingTop: 40 }}
      className={` flex-1 ${
        isDarkMode === "dark" ? "bg-black/90" : "bg-slate-200"
      } `}
    >
      <View className=" px-3 py-1 ">
        <View className=" flex-row justify-center items-center px-1 ">
          {/* <View className="bg-white  px-2 py-2 shadow-md rounded-md">
            <Ionicons name="menu-sharp" size={30} color="black" />
          </View> */}
          <View>
            <Text
              className={`text-3xl font-bold  ${
                isDarkMode === "dark" ? "text-white" : "text-black"
              } `}
            >
              News<Text className="text-red-600">World</Text>
            </Text>
          </View>
          {/* <View className="bg-white px-2 py-2 shadow-md rounded-md">
            <Ionicons name="notifications-outline" size={30} color="black" />
          </View> */}
        </View>
      </View>
      <View>
        <NavHeader />
      </View>
      <View className="flex-row items-center">
        <HeadLines />
      </View>
      {loader ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => item.component}
          keyExtractor={(item) => item?.name}
        />
      )}
    </View>
  );
};

export default HomeScreen;
