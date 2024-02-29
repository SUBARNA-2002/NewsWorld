import { View, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import TrendingCarousel from "../atoms/TrendingCarousel";
import { LogBox } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TrendingNews = () => {
  LogBox.ignoreLogs(["ViewPropTypes"]);

  const data = [
    {
      title: "The best way to invest in stocks",
      description:
        "Stocks are a great way to invest your money. Here are some tips to get you started.",
      image:
        "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
    },
    {
      title: "The best way to invest in stocks",
      description:
        "Stocks are a great way to invest your money. Here are some tips to get you started.",
      image:
        "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
    },
    {
      title: "The best way to invest in stocks",
      description:
        "Stocks are a great way to invest your money. Here are some tips to get you started.",
      image:
        "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
    },
    {
      title: "The best way to invest in stocks",
      description:
        "Stocks are a great way to invest your money. Here are some tips to get you started.",
      image:
        "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
    },
  ];
  // console.log("Data====>>>>",data)
  const navigate = useNavigation();
  return (
    <View className="py-3  px-3">
      <View className="flex-row justify-between items-center">
        <Text className="text-2xl font-medium">
          <Text className="text-red-600">Trending</Text> News
        </Text>
        <TouchableOpacity onPress={() => navigate.navigate('NewsList', {data: data,heading:'Trending'})}>
          <Text className="text-md text-zinc-500">See all</Text>
        </TouchableOpacity>
      </View>
      <View className="py-3">
        <TrendingCarousel data={data} />
      </View>
    </View>
  );
};

export default TrendingNews;
