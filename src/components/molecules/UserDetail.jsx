import { View, Text, Image } from "react-native";
import React from "react";
import Btn from "../atoms/Btn";

const UserDetail = () => {
  return (
    <View>
      <View className="flex-row justify-center ">
        <View className="h-32 w-32 rounded-full bg-black/10">
          <Image
            className="h-[100%] w-[100%] object-fill rounded-full "
            source={{
              uri: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
            }}
          />
        </View>
      </View>
      <Text className=" text-center text-2xl pt-3 font-medium">
        Subarna Keshari Sutar
      </Text>
      <Text className=" text-center text-xl ">subarna.sutar@squbix.com</Text>
      <View className="flex-row justify-center py-5">
        <Text className="w-[45vw] py-3  rounded-3xl bg-red-500 text-white text-center text-xl">
          Edit Profile
        </Text>
      </View>
      <Text className="h-[1px]  bg-black/10 my-3 mx-3" />
      <View >
        <Btn icon="settings" title="Settings" />
        <Btn icon="key" title="Change Password" />
        <Btn icon="log-out" title="Logout" />
      </View>
    </View>
  );
};

export default UserDetail;
