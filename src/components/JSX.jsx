import { View, Text } from 'react-native';
import React from 'react';

const JSX = () => {
  let name = 'vinay';
  const getAge = () => {
    return 22;
  }
  return (
    <View>
      <Text style={{fontSize : 30}}>React Native Apps</Text>
      <Text style={{fontSize : 30}}>{ name }</Text>
      <Text style={{fontSize : 30}}>{ 3+3 }</Text>
      <Text style={{fontSize : 30}}>{ getAge() }</Text>
    </View>
  );
};

export default JSX;