import React, { useRef, useState } from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  require('../assets/images/apple.png'),
  require('../assets/images/banana.png'),
  require('../assets/images/milk.png'),
];

const ImageSlider = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setActiveIndex(index);
  };

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <Image key={index} source={image} style={{ width, height: 250, resizeMode: 'cover' }} />
        ))}
      </ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: index === activeIndex ? 'black' : 'gray',
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageSlider;
