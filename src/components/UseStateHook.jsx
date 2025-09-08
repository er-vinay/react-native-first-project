import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

const UseStateHook = () => {
  const [name, setName] = useState();

  const getName = (name) => {
      // console.warn('Name : ', name);

      setName(name);
      return name;
  } 
  return (
    <View>
      <Text style={ {fontSize: 30} }>Name : { name }</Text>
      <Button title='Press' onPress={ () => getName('vinay kumar') } />
    </View>
  );
};

export default UseStateHook;