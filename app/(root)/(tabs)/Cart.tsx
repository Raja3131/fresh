import { StyleSheet, Text, View, ScrollView, Image, Pressable, TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react';
import ImageSlider from '@/components/ImageSlider';
import Accordion from '@/components/Accordion';
import Button from '@/components/Button';
import { router } from 'expo-router';
import { ChevronLeft,Plus,Minus,Heart } from 'lucide-react-native';
import NotifyModal from '@/components/NotifyModal';

const Cart = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1) 
  const [price, setPrice] = useState<number>(80) 
    const [modalVisible, setModalVisible] = useState<boolean>(false);
  

  return (
    <View className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }}>
        <View>
          <View className="flex-row justify-between items-center p-4">
            <ChevronLeft size={24} color="black" onPress={()=>{
              router.push('/(root)/(tabs)/shop')
            }}/>
            <TouchableOpacity onPress={()=>{
              setModalVisible(true);
            }}>
            <Image source={require('../../../assets/images/upload.png')} />
            </TouchableOpacity>
          </View>

          <ImageSlider />

          <View className="flex-row justify-between items-center p-4">
            <Text style={{ fontFamily: 'Gilroy-Bold' }} className="text-2xl text-center">
              Natural Red Apple
            </Text>
            <TouchableOpacity onPress={() => setLiked(!liked)}>
      <Heart size={24} color={liked ? "red" : "black"} />
    </TouchableOpacity>
          </View>

          <Text className='font-gilroy text-lg ml-4'>1kg, Price</Text>

          <View>
            <View className="flex-row justify-between items-center">
              <View className="flex-row gap-4 items-center p-4">
                <Minus size={20} color={'gray'} onPress={()=>{
                  const newQty = quantity - 1;
                  if(newQty > 0){
                    setQuantity(newQty);
                    setPrice(newQty * 80);
                  }
                }}/>
                <View className="h-10 w-10 rounded-2xl bg-white border border-gray-300 flex-row justify-center items-center">
                  <Text className="text-lg font-gilroy-bold">{quantity}</Text>
                </View>
                <Plus size={20} color={'#F3603F'} onPress={()=>{
                  const newQty = quantity + 1;
                  setQuantity(newQty);
                  setPrice(newQty * 80);
                }}/>
              </View>
              <Text className='p-4 font-gilroy'>₹{price}</Text>
            </View>
          </View>

          <View className="p-4">
            <Accordion title="Product Detail" content="Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet." />
            <Accordion title="Nutrients" content="Rich in vitamins and antioxidants, perfect for a healthy diet." />
            <Accordion title="Customer Reviews" content="Great quality and fresh taste!" rating={4} />
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-16 left-0 w-full p-4 bg-white border-t border-gray-300">
        <Button title="Order Now" onPress={()=>{
          router.push('/Order')
        }} />
      </View>
      <NotifyModal visible={modalVisible} onClose={() => setModalVisible(false)} />

    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
