import { View, SafeAreaView, Text, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';
import SearchInput from '@/components/SearchInput';
import ImageGrid from '@/components/Product';
import { Search, AlignLeft } from 'lucide-react-native';
import SideMenu from '../../../components/SideMenu';
import NotifyModal from '@/components/NotifyModal';
import { router } from 'expo-router';

type Product = {
  id: number;
  name: string;
  image: any;
  qty: number;
  price: string;
};

const products: Record<string, Product[]> = {
  exclusiveOffer: [
    { id: 1, name: 'Apple', image: require('../../../assets/images/apple.png'), qty: 2, price: '₹120' },
    { id: 2, name: 'Banana', image: require('../../../assets/images/banana.png'), qty: 6, price: '₹10' },
  ],
  bestSelling: [
    { id: 3, name: 'Chilly', image: require('../../../assets/images/chilly.png'), qty: 5, price: '₹10' },
    { id: 4, name: 'Ginger', image: require('../../../assets/images/ginger.png'), qty: 1, price: '₹20' },
    { id: 5, name: 'Meat', image: require('../../../assets/images/meat.png'), qty: 1, price: '₹400' },
    { id: 6, name: 'Milk', image: require('../../../assets/images/milk.png'), qty: 1, price: '₹30' },
  ],
};

const Shop: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  

  const filterProducts = (category: string): Product[] =>
    products[category].filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar hidden={false}/>
      <SideMenu  onLogout={() => {
        router.push('/(auth)/sign-in')
      }} isOpen={menuOpen} setIsOpen={setMenuOpen} />

      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }}>
        <View className="flex-row gap-32 px-4 bg-white items-center">
          <TouchableOpacity onPress={() => setMenuOpen(true)}>
            <AlignLeft size={30} color="black" />
          </TouchableOpacity>
          <Image className="w-10 h-10 mt-2" source={require('../../../assets/images/logoapple.png')} />
        </View>

        <View className="flex-row justify-center">
          <Image className="mt-2" source={require('../../../assets/images/exclude.png')} />
          <Text className="font-gilroy mt-2 px-4 text-xl font-regular">Guindy, Chennai</Text>
        </View>

        <View className="mt-4">
          <SearchInput onChangeText={(value) => setSearch(value)} placeholder="Search store" value={search} icon={<Search size={20} color="#888" />} />
        </View>

        <Image source={require('../../../assets/images/banner.png')} className="w-[90%] mx-auto p-6 mt-8 rounded-2xl" />

        <View className="flex-row justify-between items-center p-4">
          <Text className="text-2xl font-gilroy-bold">Exclusive Offer</Text>
          <TouchableOpacity  onPress={() => setModalVisible(true)}>
          <Text className="text-primary font-regular font-gilroy">See All</Text>
          </TouchableOpacity>
        </View>
        <ImageGrid products={filterProducts('exclusiveOffer')} />

        <View className="flex-row justify-between items-center p-4 mt-6">
          <Text className="text-2xl font-gilroy-bold">Best Selling</Text>
          <TouchableOpacity  onPress={() => setModalVisible(true)}>
          <Text className="text-primary font-gilroy">See All</Text>
          </TouchableOpacity>
        </View>
        <ImageGrid products={filterProducts('bestSelling')} />
        <NotifyModal visible={modalVisible} onClose={() => setModalVisible(false)} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;
