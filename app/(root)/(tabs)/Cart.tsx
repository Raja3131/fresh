import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import ImageSlider from '@/components/ImageSlider';
import Accordion from '@/components/Accordion';
import Button from '@/components/Button';
import { router, useLocalSearchParams } from 'expo-router';
import { ChevronLeft, Plus, Minus, Heart } from 'lucide-react-native';
import NotifyModal from '@/components/NotifyModal';

const Cart = () => {
  const params = useLocalSearchParams();
  const product = typeof params.product === 'string' ? JSON.parse(params.product) : null;

  const [liked, setLiked] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [productPrice, setProductPrice] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const parsedPrice = product?.price ? parseFloat(product.price.replace(/\D/g, "")) : 0;
    setProductPrice(parsedPrice);
    setQuantity(1);
    setTotalPrice(parsedPrice);
  }, [params.product]);

  const updateQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * productPrice);
  };

  return (
    <View className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }}>
        <View>
          <View className="flex-row justify-between items-center p-4">
            <ChevronLeft size={24} color="black" onPress={() => router.push('/(root)/(tabs)/shop')} />
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image source={require('../../../assets/images/upload.png')} />
            </TouchableOpacity>
          </View>

          <ImageSlider />

          <View className="flex-row justify-between items-center p-4">
            <Text style={{ fontFamily: 'Gilroy-Bold' }} className="text-2xl text-center">
              {product?.name || 'Product Name'}
            </Text>
            <TouchableOpacity onPress={() => setLiked(!liked)}>
              <Heart size={24} color={liked ? 'red' : 'black'} />
            </TouchableOpacity>
          </View>

          <Text className="font-gilroy text-lg ml-4">1kg, Price</Text>

          <View>
            <View className="flex-row justify-between items-center">
              <View className="flex-row gap-4 items-center p-4">
                <Minus
                  size={20}
                  color={'gray'}
                  onPress={() => {
                    if (quantity > 1) {
                      updateQuantity(quantity - 1);
                    }
                  }}
                />
                <View className="h-10 w-10 rounded-2xl bg-white border border-gray-300 flex-row justify-center items-center">
                  <Text className="text-lg font-gilroy-bold">{quantity}</Text>
                </View>
                <Plus
                  size={20}
                  color={'#F3603F'}
                  onPress={() => updateQuantity(quantity + 1)}
                />
              </View>
              <Text className="p-4 font-gilroy">₹{totalPrice}</Text>
            </View>
          </View>

          <View className="p-4">
            <Accordion title="Product Detail" content={`${product?.name || 'This product'} is nutritious. May be good for weight loss. ${product?.name || 'This product'} may be good for your heart as part of a healthful and varied diet.`} />
            <Accordion title="Nutrients" content="Rich in vitamins and antioxidants, perfect for a healthy diet." />
            <Accordion title="Customer Reviews" content="Great quality and fresh taste!" rating={4} />
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-16 left-0 w-full p-4 bg-white border-t border-gray-300">
        <Button title="Order Now" onPress={() => router.push('/Order')} />
      </View>
      <NotifyModal visible={modalVisible} onClose={() => setModalVisible(false)}><Text className='font-gilroy-bold font-lg'>This Feature is Coming Soon</Text></NotifyModal>



    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
