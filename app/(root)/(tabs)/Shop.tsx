import { View,SafeAreaView, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import SearchInput from '@/components/SearchInput'
import ImageGrid from '@/components/Product'

const products = [
    {
      id: 1,
      name: "Apple",
      image: require("../../../assets/images/apple.png"),
      qty: 2,
      price: "₹120",
    },
    {
      id: 2,
      name: "Banana",
      image: require("../../../assets/images/banana.png"),
      qty: 6,
      price: "₹10",
    },
    {
      id: 3,
      name: "Chilly",
      image: require("../../../assets/images/chilly.png"),
      qty: 5,
      price: "₹10",
    },
    {
      id: 4,
      name: "Ginger",
      image: require("../../../assets/images/ginger.png"),
      qty: 1,
      price: "₹20",
    },
    {
        id: 5,
        name: "Meat",
        image: require("../../../assets/images/meat.png"),
        qty: 1,
        price: "₹400",
      },
      {
        id: 6,
        name: "Milk",
        image: require("../../../assets/images/milk.png"),
        qty: 1,
        price: "₹30",
      },
  ];
  

  
const Shop = () => {
  return (
    <SafeAreaView style={{
        backgroundColor:'white',
        flex:1
    }}>
      <ScrollView>
      <View className='flex-row gap-32 px-4 bg-white'>
            <Image className='mt-4' source={require("../../../assets/images/shape.png")}/>
        <Image style={{
            width: 40,
            height: 40,
            marginLeft: 10,
            marginTop: 10
        }} source={require("../../../assets/images/logoapple.png")}/>

        </View>
        <View className='flex-row justify-center'>
        <Image style={{
            
            marginLeft: 10,
            marginTop: 10
        }} source={require("../../../assets/images/exclude.png")}/>
        <Text className='mt-2 px-4 text-xl' style={{fontFamily:'Gilroy-Regular'}}>Guindy, Chennai</Text>
        

        </View>
       <View className='mt-4'>
       <SearchInput
        onChangeText={
            (text) => console.log(text)
        }
        placeholder='Search products'
        value=''
        />
       </View>
        <Image source={require("../../../assets/images/banner.png")} className='w-[90%] mx-auto p-6 mt-8 rounded-2xl'/>
        <View className='flex-row justify-between items-center p-4'>
            <Text style={{fontFamily:'Gilroy-Bold',fontSize:24,textAlign:'center'}}>Exclusive Offer</Text>
            <Text className='text-primary' style={{fontFamily:'Gilroy-Regular'}}>See All</Text>
        </View>
<View>
    {/* Product List */}
   
    <ImageGrid products={products} />

</View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Shop