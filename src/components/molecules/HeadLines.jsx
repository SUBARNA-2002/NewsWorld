import React, { useRef, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
} from "react-native";

const HeadLines = () => {
  const data = [
    {
      id: 1,
      title:
        " New Study Reveals Surprising Benefits of Chocolate Consumption",
    },
    {
      id: 2,
      title:
        "Tech Giant Unveils Revolutionary Smartphone with Holographic Display",
    },
    {
      id: 3,
      title:
        "Global Leaders Gather for Climate Change Summit: Bold Commitments Announced",
    },
    {
      id: 4,
      title:
        "Scientists Make Breakthrough in Renewable Energy: Solar Panels Reach Record Efficiency",
    },
    {
      id: 5,
      title:
        "Blockbuster Movie Sequel Confirmed for Release Next Year",
    },
  ];
  const totalWidth = data.reduce(
    (total, item) => total + item.title.length * 8,
    0
  );

  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scrollX, {
          toValue: -totalWidth,
          duration: totalWidth * 10, // Adjust the duration based on the total width
          useNativeDriver: true,
          easing: Easing.linear, // Add this line
        }),
        Animated.timing(scrollX, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <ScrollView
      horizontal
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
    >
      <View className="flex-row w-full  ">
        {data.map((item, index) => (
          <Animated.Text
            className="text-lg mx-4  "
            key={item.id}
            style={[
              {
                transform: [{ translateX: scrollX }],
              },
            ]}
          >
            {item.title}
          </Animated.Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // overflow: "hidden",
  },
  text: {
    fontSize: 20,
    marginRight: 50,
  },
});

export default HeadLines;
