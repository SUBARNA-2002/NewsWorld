import { useNavigation } from "@react-navigation/core";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const Tab = ({ title }) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate.navigate("NewsList", { heading: title })}
    >
      <View className="bg-red-600 rounded-md mx-1 my-3">
        <Text className="px-2 py-2 text-md text-white uppercase font-semibold">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const NavHeader = () => {
  const data = [
    { title: "Trending" },
    { title: "International" },
    { title: "National" },
    { title: "State" },
    { title: "Entertainment" },
    { title: "SpecialStory" },
    { title: "Health" },
    { title: "Art & Culture" },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Tab title={item.title} />}
      keyExtractor={(item) => item.title}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default NavHeader;
