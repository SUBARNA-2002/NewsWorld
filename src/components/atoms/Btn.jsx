import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
const Btn = ({icon,title}) => {
    // console.warn(icon,title)
  return (
    <View className="flex-row justify-between bg-slate-200 rounded-lg mx-2 py-2 items-center px-3 my-1 ">
      <View className="flex-row gap-2 items-center">
        <View className='px-2 py-2 bg-red-500/20 rounded-full'>
          <Feather name={icon} size={24} color="red" />
        </View>
        <Text className="text-xl font-medium">{title}</Text>
      </View>
      <View>
        <Feather name="chevron-right" size={24} color="red" />
      </View>
    </View>
  );
};

export default Btn;
