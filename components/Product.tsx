import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

interface Product {
  id: number;
  name: string;
  image: any;
  qty?: number;
  price?: string;
  color?: string;
}

interface ImageGridProps {
  products: Product[];
  showColors?: boolean;
}

const Product: React.FC<ImageGridProps> = ({
  products,
  showColors = false,
}) => {
  return (
    <View className="flex-row flex-wrap p-4 justify-between gap-y-4">
      {products.map((product) =>
        !showColors ? (
          <TouchableOpacity
            key={product.id}
            onPress={() =>
              router.push({
                pathname: "/Cart",
                params: { product: JSON.stringify(product), time: Date.now() },
              })
            }
            className="w-[48%] p-4 border border-gray-300 rounded-2xl bg-white items-center"
            style={{
              minHeight: 220,
              marginBottom: 16,
              backgroundColor: showColors ? product.color || "#FFF" : "#FFF",
            }}
          >
            <Image
              source={product.image}
              style={{ width: "100%", height: 120 }}
              resizeMode="contain"
            />
            <View className="w-full items-center flex-1">
              <Text className="text-lg font-gilroy-semibold">
                {product.name}
              </Text>
              <Text className="text-gray-500 font-gilroy">{product.qty}</Text>
              <Text className="text-green-600 font-gilroy-bold">
                {product.price}
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <>
            <View
              key={product.id}
              className="w-[48%] p-4 border border-gray-300 rounded-2xl bg-white items-center"
              style={{
                minHeight: 220,
                marginBottom: 16,
                backgroundColor: showColors ? product.color || "#FFF" : "#FFF",
              }}
            >
              <Image
                source={product.image}
                style={{ width: "100%", height: 120 }}
                resizeMode="contain"
              />
              <View className="w-full items-center flex-1">
                <Text className="text-lg font-gilroy-semibold">
                  {product.name}
                </Text>
                <Text className="text-gray-500 font-gilroy">{product.qty}</Text>
                <Text className="text-green-600 font-gilroy-bold">
                  {product.price}
                </Text>
              </View>
            </View>
          </>
        )
      )}
    </View>
  );
};

export default Product;
