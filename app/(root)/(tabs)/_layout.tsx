import { Image, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/app/constants/icons";

const TabIcon = ({ focused, icon, title }: { focused: boolean; icon: any; title: string }) => {
  return (
    <View className="items-center justify-center w-16 h-14">
      <Image
        source={icon}
          tintColor ={focused ? "#F3603F" : "#181725"}
        resizeMode="contain"
      className="size-6 mt-6 "
      />
      <Text  className={`${
        focused
          ? "text-primary font-rubik-medium"
          : "text-black-200 font-rubik"
      } text-xs w-full text-center mt-1` } style={{ fontFamily: "Gilroy-Regular" }}>
        {title}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
<Tabs.Screen name="shop" options={{
  title: "Shop",
  headerShown: false,
  tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.shop} title="Shop" />,
}} />
<Tabs.Screen name="explore" options={{
  title: "Explore",
  headerShown: false,
  tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.search} title="Explore" />,
}} />
<Tabs.Screen name="Cart" options={{
  title: "Cart",
  headerShown: false,
  tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.cart} title="Cart" />,
}} />
<Tabs.Screen name="favourite" options={{
    title: "Favourite",
    headerShown: false,
    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.heart} title="Favourite" />,
}} />

<Tabs.Screen name="profile" options={{
    title: "Profile",
    headerShown: false,
    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.profile} title="Profile" />,
}} />


    </Tabs>
  );
};

export default TabLayout;
