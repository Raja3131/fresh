import { StyleSheet, Text, View,SafeAreaView, Image, ImageBackground } from 'react-native'
import React from 'react'

const Cart = () => {
  return (
   <SafeAreaView>
    <View>
   
    <View className='flex-row justify-between items-center p-4'>
        <Image source={require('../../../assets/images/back.png')}/>
        <Image source={require('../../../assets/images/upload.png')}/>

      </View>
      <ImageBackground className='h-80' source={require('../../../assets/images/apple.png')}>

</ImageBackground>
<View className='flex-row justify-between items-center p-4'>
  <Text style={{fontFamily:"Gilroy-Bold"}} className='text-2xl text-center'>Natural Red Apple</Text>
  <Image source={require('../../../assets/images/heart.png')}/>
</View>
<Text>1kg, Price</Text>
<View>
<View className='flex-row justify-between items-center'>
<View className='flex-row gap-4 items-center p-4'>
<Image source={require('../../../assets/images/minus.png')}/>

<View className="
        h-10 w-10 rounded-full bg-white border border-gray-300 flex-row justify-center items-center 
        "></View>
<Image source={require('../../../assets/images/Plus.png')}/>

</View>
<Text>
  <Text>Total: ₹199</Text>
</Text>
</View>
</View>
      
    
      
    </View>

   </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({})