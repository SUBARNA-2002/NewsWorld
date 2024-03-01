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
  const { isDarkMode } = React.useContext(DarkModeContext);

  const handleSearch = () => {
    if (query.trim() === "") {
      // The search bar is empty, return early
      return;
    }
    // Speech.speak(query);
    setShowResults(true);
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
        <View>
          <Text
            className={`text-2xl text-center py-10 ${
              isDarkMode === "dark" ? "text-white/70" : ""
            } `}
          >
            Search Results for {query}
          </Text>
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

export default SearchScreen;
