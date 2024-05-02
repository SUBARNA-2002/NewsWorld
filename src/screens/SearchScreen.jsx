import {
  Platform,
  Image,
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Voice from "@react-native-voice/voice";
import { DarkModeContext } from "../context/DarkModeContext";
import health from "../../assets/SearchImage/health.jpg";
import entertainment from "../../assets/SearchImage/entertainment.jpg";
import international from "../../assets/SearchImage/international.jpg";
import national from "../../assets/SearchImage/national.jpg";
import technology from "../../assets/SearchImage/technology.jpg";
import trending from "../../assets/SearchImage/trending.jpg";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
const PingImage = ({ style, ...props }) => {
  const scale = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.9,
          duration: 4000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.Image
      {...props}
      style={[
        style,
        {
          transform: [{ scale }],
        },
      ]}
    />
  );
};

const SearchScreen = () => {
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  // const [isRecording, setIsRecording] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { isDarkMode } = React.useContext(DarkModeContext);
  const navigate = useNavigation();
  const handleSearch = async () => {
    try {
      if (query.trim() === "") {
        return;
      }
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=615607a761f14650b30bbd7f73bc53cc`
      );
      setSearchResults(res?.data?.articles);
      // Speech.speak(query);
      setShowResults(true);
    } catch (error) {
      console.warn(error, "Error in Search Result");
    }
  };

  const handleSpeech = () => {
    alert("Something went wrong, please try again later.");
  };

  useEffect(() => {
    if (query === "") {
      setShowResults(false);
    }
  }, [query]);

  return (
    <View
      className={`py-12  flex-1  px-3 ${
        isDarkMode === "dark" ? "bg-black/90" : "bg-slate-200"
      } `}
    >
      <View
        className={`flex-row items-center  px-2 rounded-md ${
          isDarkMode === "dark" ? "bg-white/50" : "bg-zinc-300"
        }`}
      >
        <TextInput
          className="text-2xl py-3 flex-1"
          placeholder="Search.."
          value={query}
          onChangeText={(text) => setQuery(text)}
          onSubmitEditing={handleSearch}
        />
        <View className="flex-row items-center gap-5">
          <TouchableOpacity onPress={handleSpeech}>
            <FontAwesome
              name="microphone"
              className=""
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSearch}>
            <Feather name="search" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {showResults ? (
        <View className='pt-3'>
          {/* <Text
            className={`text-xl text-center py-4 ${
              isDarkMode === "dark" ? "text-white/70" : ""
            } `}
          >
            Search Results for {query}
          </Text> */}
          <FlatList
            showsVerticalScrollIndicator={false}
            data={searchResults}
            renderItem={({ item }) => <RenderItem item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      ) : (
        <View className="relative  h-[100%] ">
          <View className="h-40 w-40  rounded-full absolute top-10 -left-20 ">
            <PingImage
              className="h-[100%] w-[100%] object-fill rounded-full "
              source={trending}
            />
          </View>
          <View className="h-52 w-52  rounded-full absolute top-8 right-5">
            <PingImage
              className="h-[100%] w-[100%] object-fill rounded-full "
              source={national}
            />
          </View>
          <View className="h-52 w-52  rounded-full absolute top-[30vh] left-1">
            <PingImage
              className="h-[100%] w-[100%] object-fill rounded-full "
              source={international}
            />
          </View>
          <View className="h-36 w-36  rounded-full absolute top-[35vh] -right-10">
            <PingImage
              className="h-[100%] w-[100%] object-fill rounded-full "
              source={entertainment}
            />
          </View>
          <View className="h-52 w-52  rounded-full absolute top-[60vh] -right-1">
            <PingImage
              className="h-[100%] w-[100%] object-fill rounded-full "
              source={technology}
            />
          </View>
          <View className="h-28 w-28  rounded-full absolute top-[62vh] left-2">
            <PingImage
              className="h-[100%] w-[100%] object-fill rounded-full "
              source={health}
            />
          </View>
        </View>
      )}
    </View>
  );
};
const RenderItem = ({ item }) => {
  const navigate = useNavigation();
  const { isDarkMode } = React.useContext(DarkModeContext);

  return (
    <TouchableOpacity
      onPress={() => navigate.navigate("NewsDetail", { newsItem: item })}
    >
      <View className="my-2 w-full  ">
        <View className="flex-row gap-2    ">
          <Image
            className="h-28 w-28 rounded-md"
            source={{ uri: item.urlToImage }}
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
export default SearchScreen;
