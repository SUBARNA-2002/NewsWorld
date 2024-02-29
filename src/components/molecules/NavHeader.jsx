import { View, Text, FlatList } from "react-native";

const Tab = ({ title }) => {
  return (
    <View className="bg-red-600 rounded-md mx-1 my-3">
      <Text className="px-2 py-1 text-sm text-white uppercase font-semibold">{title}</Text>
    </View>
  );
};

const NavHeader = () => {
  const data = [
    { title: "Latest" },
    { title: "International" },
    { title: "National" },
    { title: "State" },
    { title: "Entertainment" },
    { title: "Special Story" },
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
