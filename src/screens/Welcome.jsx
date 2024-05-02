import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  LogBox,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigate = useNavigation();
  LogBox.ignoreLogs(["ViewPropTypes"]);

  return (
    <ScrollView className="flex-1 bg-black  ">
      <View className="relative">
        <Image
          className="h-[68vh] w-full"
          source={{
            uri: "https://w0.peakpx.com/wallpaper/732/401/HD-wallpaper-handsome-boy-magazine-man-news-newspapers-stylish-wild-world-young.jpg",
          }}
        />

        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(0,0,0,1)", "transparent"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.background}
        />
      </View>
      <View>
        <Text className="text-white text-center tracking-widest text-5xl font-bold p-2">
          News<Text className="text-red-600">World</Text>
        </Text>
      </View>
      <View>
        <Text className="text-neutral-400 p-3 text-lg tracking-wide text-center pb-10">
          Stay Connected, Stay Informed - Welcome to NewsWorld! Your window to
          the world's latest updates. Discover, Engage, and Stay Ahead with
          NewsWorld.
        </Text>
      </View>
      <TouchableOpacity className="bg-red-600 py-4 rounded-3xl mx-5 " onPress={()=>navigate.navigate("HomeTabs")}>
        <Text className="text-center text-2xl font-semibold text-white">
          Explore
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
  },
});
