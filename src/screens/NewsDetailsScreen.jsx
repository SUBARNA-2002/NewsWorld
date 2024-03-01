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

const NewsDetailsScreen = () => {
  const navigate = useNavigation();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { isDarkMode } = React.useContext(DarkModeContext);
  // const { isDarkMode } = React.useContext(DarkModeContext);
  const headline =
    "Anant Ambani, Radhika Merchant pre wedding live: Check out video of glamorous tent accommodation for guests";
  const description = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
  accusamus obcaecati nostrum saepe voluptatem minus autem perferendis
  sint nulla, quas rerum iure ad voluptatibus. Quaerat, velit! Ipsa
  perferendis eos enim? Lorem ipsum dolor sit, amet consectetur
  adipisicing elit. Vero doloremque, maxime nesciunt asperiores
  similique qui cupiditate eos laborum minus doloribus! Lorem, ipsum
  dolor sit amet consectetur adipisicing elit. Ut accusamus obcaecati
  nostrum saepe voluptatem minus autem perferendis sint nulla, quas
  rerum iure ad voluptatibus. Quaerat, velit! Ipsa perferendis eos
  enim? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
  doloremque, maxime nesciunt asperiores similique qui cupiditate eos
  laborum minus doloribus! Lorem, ipsum dolor sit amet consectetur
  adipisicing elit. Ut accusamus obcaecati nostrum saepe voluptatem
  minus autem perferendis sint nulla, quas rerum iure ad voluptatibus.
  Quaerat, velit! Ipsa perferendis eos enim? Lorem ipsum dolor sit,
  amet consectetur adipisicing elit. Vero doloremque, maxime nesciunt
  asperiores similique qui cupiditate eos laborum minus doloribus!`;

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
      className={`pt-10  px-3 ${
        isDarkMode === "dark" ? "bg-black/90" : " bg-slate-200"
      }`}
    >
      <View className="flex-row justify-between">
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
      <ScrollView>
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
              State
            </Text>

            <View className="flex-row gap-3">
              <Text className="text-sm text-zinc-500 font-medium">Admin</Text>
              <Text className="text-sm text-zinc-500 font-medium">
                29-02-2024
              </Text>
            </View>
          </View>
          <View className="h-[50vh] w-full mt-5 ">
            <Image
              style={{ height: "100%", width: "100%", objectFit: "fill" }}
              source={{
                uri: "https://www.maharaniwomen.com/wp-content/uploads/2021/09/A2.jpg",
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
        </View>
      </ScrollView>
    </View>
  );
};

export default NewsDetailsScreen;
