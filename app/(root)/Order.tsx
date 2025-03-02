import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const Order = () => {
  return (
    <View className="flex-1 justify-center items-center px-6 bg-white">
        <Image source={require('../../assets/images/click.png')} className="w-56 h-56 mb-48 mr-8" />
        <Text className="text-2xl font-bold text-center">Your Order has been Accepted</Text>
        <Text className="text-lg text-gray-500 text-center mt-2">
          Your items have been placed and are on their way to being processed
        </Text>

      <TouchableOpacity onPress={
        ()=>{
          router.push('/(root)/(tabs)/shop')
        }
      } className="rounded-lg py-4 w-4/5 absolute bottom-10">
        <Text className="text-black text-center text-lg font-bold uppercase">Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Order;
