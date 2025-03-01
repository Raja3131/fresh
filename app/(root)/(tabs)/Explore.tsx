import {View,Text,StyleSheet} from 'react-native'
import React from "react"

const Explore = ()=>{
return (
    <>
    <View style={styles.container}>
        <Text className='text-green-500 font-gilroy text-3xl'>Explore</Text>
    </View>
    </>
)
}

const styles = StyleSheet.create({
    container:{
        padding:10
    }
})

export default Explore
