import { useNavigation } from "@react-navigation/core";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const Tab = ({ title, getNewsData }) => {
  const navigate = useNavigation();
  const [loading, setLoading] = useState(false);

  const handlePress = async () => {
    setLoading(true);
    const newsData = await getNewsData(title);
    setLoading(false);
    navigate.navigate("NewsList", { heading: title, data: newsData });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View className="bg-red-600 rounded-md mx-1 my-3">
        <Text className="px-2 py-2 text-md text-white uppercase font-semibold">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const NavHeader = () => {
  const data = [
    { title: "Trending" },
    { title: "International" },
    { title: "National" },
    { title: "State" },
    { title: "Entertainment" },
    // { title: "Specialstory" },
    { title: "Health" },
    // { title: "Art & Culture" },
  ];

  const getNewsData = async (query) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=615607a761f14650b30bbd7f73bc53cc`
      );
      const data = await response.json();
      return data.articles;
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Tab title={item.title} getNewsData={getNewsData} />
      )}
      keyExtractor={(item) => item.title}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default NavHeader;
