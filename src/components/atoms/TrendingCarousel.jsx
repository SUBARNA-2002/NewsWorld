import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Dimensions, Text, Image, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import { DarkModeContext } from "../../context/DarkModeContext";

const TrendingCarousel = ({ data }) => {

  const { width: viewportWidth } = Dimensions.get("window");
  return (
    <Carousel
      data={data}
      renderItem={({ item }) => <RenderItem item={item} />}
      sliderWidth={viewportWidth}
      itemWidth={viewportWidth}
      autoplay={true}
      loop={true}
      autoplayDelay={500}
      autoplayInterval={3000}
      loopClonesPerSide={data.length} // Add this line
    />
  );
};

const RenderItem = ({ item }) => {
  const navigate=useNavigation()
  const { isDarkMode } = React.useContext(DarkModeContext);


  // console.log("item====>>>>", item);
  return (
    <TouchableOpacity onPress={()=>navigate.navigate('NewsDetail')} >
      <View className="relative">
        <Image
          className="h-[30vh] w-[94vw] rounded-md"
          source={{ uri: item.image }}
        />
        <Text className="absolute top-3 left-3  bg-red-600 text-white p-2 rounded" >
          State
        </Text>
      </View>
      <Text numberOfLines={2} className={`text-xl py-1 ${isDarkMode==="dark"?"text-white/70":"text-black"}`}>
        {item.title}
      </Text>
     
    </TouchableOpacity>
  );
};

export default TrendingCarousel;
