import { View, Text, Button } from 'react-native';
import React from 'react';

const OnPress = () => {
    let name = 'Vinay'
    const getName = () => {
        name = 'vinay kumar';
        console.warn('Name : ', name);
        return name;
    } 
  return (
    <View>
      <Text style={{ fontSize:30}}>{name}</Text>
      {/* <Button title='Press' onPress={ () => getName('vinay')} /> */}
      <Button title='Press' onPress={ getName } />
    </View>
  );
};

export default OnPress;