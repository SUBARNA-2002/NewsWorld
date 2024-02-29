import {
  Image,
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Voice from "@react-native-voice/voice";
import * as Speech from "expo-speech";

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

  const handleSearch = () => {
    Speech.speak(query);
    setShowResults(true);
  };

  useEffect(() => {
    if(query === ''){
      setShowResults(false)
    }
  }, [query]);

  return (
    <View className="pt-12 bg-slate-200 px-3  ">
      <View className="flex-row items-center bg-zinc-300 px-2 rounded-md">
        <TextInput
          className="text-2xl py-3  flex-1"
          placeholder="Search.."
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
        <View className="flex-row items-center gap-5">
          <TouchableOpacity>
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
          <Text className='text-2xl text-center py-10'>Search Results for {query}</Text>
        </View>
      ) : (
        <View className="relative h-[100%]">
          <View className="h-40 w-40  rounded-full absolute top-10 -left-20 ">
            <PingImage
              className="h-[100%] w-[100%] object-fill rounded-full "
              source={{
                uri: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
              }}
            />
          </View>
          <View className="h-52 w-52  rounded-full absolute top-8 right-5">
            <PingImage
              className="h-[100%] w-[100%] object-fill rounded-full "
              source={{
                uri: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
              }}
            />
          </View>
          <View className="h-52 w-52  rounded-full absolute top-[30vh] left-1">
            <PingImage
              className="h-[100%] w-[100%] object-fill rounded-full "
              source={{
                uri: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
              }}
            />
          </View>
          <View className="h-36 w-36  rounded-full absolute top-[35vh] -right-10">
            <PingImage
              className="h-[100%] w-[100%] object-fill rounded-full "
              source={{
                uri: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
              }}
            />
          </View>
          <View className="h-52 w-52  rounded-full absolute top-[60vh] -right-1">
            <PingImage
              className="h-[100%] w-[100%] object-fill rounded-full "
              source={{
                uri: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
              }}
            />
          </View>
          <View className="h-28 w-28  rounded-full absolute top-[62vh] left-2">
            <PingImage
              className="h-[100%] w-[100%] object-fill rounded-full "
              source={{
                uri: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default SearchScreen;
