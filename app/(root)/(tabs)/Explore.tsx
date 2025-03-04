import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import SearchInput from '@/components/SearchInput';
import ImageGrid from '@/components/Product';
import { Search } from 'lucide-react-native';

const products = [
  { id: 1, name: "Vegetables", image: require("../../../assets/images/vegetables.png"), color: "#53B1754D" },
  { id: 2, name: "Dairy", image: require("../../../assets/images/milk.png"), color: "#D3B0E040" },
  { id: 3, name: "Snacks", image: require("../../../assets/images/snacks.png"), color: "#F8A44C1A" },
  { id: 4, name: "Meat", image: require("../../../assets/images/meat.png"), color: "#F7A59340" },
  { id: 5, name: "Oil", image: require("../../../assets/images/oil.png"), color: "#836AF626" },
  { id: 6, name: "Drinks", image: require("../../../assets/images/drinks.png"), color: "#B7DFF540" },
];

const Explore: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }}>
        <View>
          <Text style={{ fontFamily: "Gilroy-Bold" }} className="text-2xl text-center">
            Find Products
          </Text>

          <View className="mt-4">
          <SearchInput onChangeText={(value) => setSearch(value)} placeholder="Search Products" value={search}icon={<Search size={20} color="#888" />} />

          </View>

          <ImageGrid products={filteredProducts} showColors={true} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Explore;
