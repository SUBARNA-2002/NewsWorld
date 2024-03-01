import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { DarkModeContext } from "../../context/DarkModeContext";
const Btn = ({icon,title}) => {
  const { isDarkMode } = React.useContext(DarkModeContext);

    // console.warn(icon,title)
  return (
    <View className={`flex-row justify-between  rounded-lg mx-2 py-2 items-center px-3 my-1 ${isDarkMode==='dark'?'bg-slate-300/30':"bg-black/10"}`}>
      <View className="flex-row gap-2 items-center">
        <View className='px-2 py-2 bg-red-500/20 rounded-full'>
          <Feather name={icon} size={24} color={"red"} />
        </View>
        <Text className={`text-xl font-medium ${isDarkMode==="dark"?"text-white/70":"text-black"}`}>{title}</Text>
      </View>
      <View>
        <Feather name="chevron-right" size={24} color="red" />
      </View>
    </View>
  );
};

export default Btn;
