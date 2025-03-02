import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, LayoutAnimation, Platform, UIManager } from 'react-native';
import { ChevronDown, Star } from 'lucide-react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AccordionProps {
  title: string;
  content: string;
  rating?: number;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, rating }) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);

    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const rotateInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View className="border-b border-gray-200 rounded-lg overflow-hidden mb-2">
      <TouchableOpacity onPress={toggleAccordion} className="bg-gray-100 p-4 flex-row justify-between items-center">
        <Text style={{fontFamily:'Gilroy-Regular'}} className="text-lg font-semibold">{title}</Text>
        <Animated.View style={{ transform: [{ rotate: rotateInterpolation }] }}>
          <ChevronDown size={20} color="black" />
        </Animated.View>
      </TouchableOpacity>
      {expanded && (
        <View className="p-4 bg-white w-full">
          {rating !== undefined && (
            <View className="flex-row items-center mb-2">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={18} color={index < rating ? '#F3603F' : '#D3D3D3'} fill={index < rating ? '#F3603F' : '#D3D3D3'} />
              ))}
              <Text className="ml-2 text-gray-600 font-gilroy ">({rating}/5)</Text>
            </View>
          )}
          <Text  style={{fontFamily:'Gilroy-Regular'}}>{content}</Text>
        </View>
      )}
    </View>
  );
};

export default Accordion;
