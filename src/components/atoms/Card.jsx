import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React from "react";

const Card = ({ data }) => {
  const { width: viewportWidth } = Dimensions.get("window");
  const itemWidth = viewportWidth * 0.65; // Adjust this value as needed

  const RenderItem = ({ item }) => {
    // console.log("item====>>>>", item);
    return (
      <View className="w-[50vw] h-[37vh]  p-1 ">
        <Image
          className="h-[20vh] w-[100%] object-fill rounded-md"
          source={{ uri: item.image }}
        />

        <Text numberOfLines={2} className="text-md py-1">
          {item.title}
        </Text>
        
      </View>
    );
  };

  const ItemSeparator = () => <View style={{ width: 10 }} />;

  return (
    <FlatList
      data={data?.slice(0, 4)} // Slice the data array to only include the first 4 items
      renderItem={({item}) => <RenderItem item={item} />} // Replace with your render function
      horizontal={true} // Add this line
      showsHorizontalScrollIndicator={false} // Add this line
      keyExtractor={(item) => item.id} // Replace with your unique key
    //   snapToInterval={itemWidth} // Add this line
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default Card;
