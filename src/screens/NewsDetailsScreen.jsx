import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Share,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import { BackHandler } from "react-native";
import { DarkModeContext } from "../context/DarkModeContext";
import { Linking } from "react-native";

const NewsDetailsScreen = ({ route }) => {
  const navigate = useNavigation();
  const { newsItem } = route.params;

  const [isSpeaking, setIsSpeaking] = useState(false);
  const { isDarkMode } = React.useContext(DarkModeContext);
  // const { isDarkMode } = React.useContext(DarkModeContext);
  const headline = newsItem?.title;
  const description = newsItem?.description;

  const handlePress = () => {
    if (isSpeaking) {
      Speech.stop();
    } else {
      Speech.speak(headline + " " + description);
    }
    setIsSpeaking(!isSpeaking);
  };

  const handleBack = () => {
    Speech.stop();
    navigate.goBack();
  };

  const handleShare = async () => {
    try {
      const downloadLink = "https://your-app-download-link.com"; // replace with your app download link
      const postLink = "https://your-post-link.com"; // replace with your post link
      const message = `Download the MediaApp now :\n ${downloadLink}\n\nCheck out this post :\n ${postLink}`;

      await Share.share({
        message,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const backAction = () => {
      Speech.stop();
      navigate.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View
      className={`flex-1 pt-12 px-3 ${
        isDarkMode === "dark" ? "bg-black/90" : " bg-slate-200"
      }`}
    >
      <View className="flex-row justify-between pb-3">
        <View>
          <TouchableOpacity onPress={handleBack}>
            <Ionicons
              name="arrow-back-outline"
              size={25}
              color={isDarkMode === "light" ? "black" : "white"}
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center gap-5">
          <TouchableOpacity onPress={handlePress}>
            <AntDesign
              name={isSpeaking ? "pause" : "sound"}
              size={25}
              color={isDarkMode === "light" ? "black" : "white"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare}>
            <AntDesign
              name="sharealt"
              size={24}
              color={isDarkMode === "light" ? "black" : "white"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo
              name="dots-three-vertical"
              size={22}
              color={isDarkMode === "light" ? "black" : "white"}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="pb-10 mt-3">
          <Text
            className={`text-2xl font-semibold ${
              isDarkMode === "dark" ? "text-white/70" : "text-black"
            } `}
          >
            {headline}
          </Text>
          <View className="flex-row justify-between items-center mt-4 ">
            <Text className="px-2 py-2 bg-red-600 text-white rounded">
              {newsItem?.source?.name}
            </Text>

            <View className="flex-row gap-3">
              {/* <Text className="text-sm text-zinc-500 font-medium">Admin</Text> */}
              <Text className="text-sm text-zinc-500 font-medium">
                {new Date(newsItem?.publishedAt).toLocaleString()}
              </Text>
            </View>
          </View>
          <View className="h-[50vh] w-full mt-5 ">
            <Image
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              source={{
                uri: newsItem?.urlToImage,
              }}
            />
          </View>
          <Text
            className={`py-5 text-xl text-justify ${
              isDarkMode === "dark" ? "text-white/70" : "text-black"
            } `}
          >
            {description}
          </Text>
          <TouchableOpacity
            className="bg-red-600 py-4 rounded-lg"
            onPress={() => Linking.openURL(newsItem?.url)}
          >
            <Text className="text-center text-lg text-white">Read More</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewsDetailsScreen;
