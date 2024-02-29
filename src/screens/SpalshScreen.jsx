import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const SpalshScreen = () => {
  const navigate = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigate.navigate("HomeTabs");
    }, 3000);
  }, []);
  return (
    <View>
      <Text>SpalshScreen</Text>
    </View>
  );
};

export default SpalshScreen;
