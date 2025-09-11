import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
const InputText = () => {
    const [username, setUsername] = useState('');

  return (
    <View style={{ padding:10 }}>
      <Text>Form</Text>
      <Text>Username : -{ username }</Text>

      <TextInput style={{borderWidth:2, borderColor: '#000', margin:10, borderRadius:5 }} placeholder='Enter your name' value={ username } onChangeText={(username) => setUsername(username)} />

      <Button title='Clear' onPress={ () => setUsername('') } />
    </View>
  );
};
export default InputText;