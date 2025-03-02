import React from "react";
import { View, Image, Text, ImageSourcePropType } from "react-native";

interface Product {
    id: number;
    name: string;
    image: ImageSourcePropType;
    qty?: number;
    price?: string;
    color?: string; // Optional color property
  }
  
  interface ImageGridProps {
    products: Product[];
    showColors?: boolean; // New prop to toggle colors
  }
  
  const ImageGrid: React.FC<ImageGridProps> = ({ products, showColors = false }) => {
  return (
    <View className="flex-row flex-wrap p-4 justify-between gap-y-4">
      {products.map((product) => (
        <View
          key={product.id}
          className="w-[48%] p-4  border border-gray-300 rounded-2xl bg-white items-center"
          style={{ minHeight: 220, marginBottom: 16, backgroundColor: showColors ? product.color || "#FFF" : "#FFF", }}
        >
          <Image
            source={product.image}
            style={{ width: "100%", height: 120 }}
            resizeMode="contain"
          />
          <View className="w-full items-center flex-1">
          <Text className="text-lg font-gilroy-semibold ">{product.name}</Text>
          <Text className="text-gray-500 font-gilroy">{product.qty}</Text>
        <Text className="text-green-600   font-gilroy-bold">{product.price}</Text>
          </View>
         <View className="self-end mt-2">
       {
        product.price&&  <View className="
        h-10 w-10 rounded-full bg-primary flex-row justify-center items-center 
        ">
          <Image source={require('../assets/images/Plus.png')}/>
        </View>
       }
         </View>
        </View>
      ))}
    </View>
  );
};

export default ImageGrid;
