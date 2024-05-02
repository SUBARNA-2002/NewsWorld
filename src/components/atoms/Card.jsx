import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { DarkModeContext } from "../../context/DarkModeContext";

const Card = ({ data }) => {
  const { width: viewportWidth } = Dimensions.get("window");
  const itemWidth = viewportWidth * 0.65; // Adjust this value as needed
  const { isDarkMode } = React.useContext(DarkModeContext);
  const RenderItem = ({ item }) => {
    const navigate = useNavigation();
    // console.log("item====>>>>", item);
    return (
      <TouchableOpacity onPress={() => navigate.navigate("NewsDetail", { newsItem: item })}>
      <View className="w-[50vw] h-[28vh]  p-1 ">
          <Image
            className="h-[20vh] w-[100%] object-fill rounded-md"
            source={{ uri: item.urlToImage }}
          />

          <Text numberOfLines={2} className={`text-md py-1 ${isDarkMode==="dark"?"text-white/70":"text-black"}`}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const ItemSeparator = () => <View style={{ width: 10 }} />;

  return (
    <FlatList
      data={data?.slice(0, 4)} // Slice the data array to only include the first 4 items
      renderItem={({ item }) => <RenderItem item={item} />} // Replace with your render function
      horizontal={true} // Add this line
      showsHorizontalScrollIndicator={false} // Add this line
      keyExtractor={(item) => item.id} // Replace with your unique key
      //   snapToInterval={itemWidth} // Add this line
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default Card;
