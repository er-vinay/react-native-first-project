import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, Alert, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const AsyncStorageExample = () => {
    const [username, setUserName] = useState('');

    const saveUserName = async () => {
        try {
            await AsyncStorage.setItem('username', username);
            setUserName('');
            Alert.alert('Username saved successfully!');
        } catch (error) {
            Alert.alert('Failed to save username.');
        }
    };

    const getUserName = async () => {
        try {
            const value = await AsyncStorage.getItem('username');
            if (value !== null) {
                setUserName(value);
                Alert.alert('Username retrieved successfully!');
            } else {
                Alert.alert('No username found.');
            }
        } catch (error) {
            Alert.alert('Failed to retrieve username.');
        }
    };

    const removeUserName = async () => {
        try {
            await AsyncStorage.removeItem('username');
            setUserName('');
            Alert.alert('Username removed successfully!');
        } catch (error) {
            Alert.alert('Failed to remove username.');
        }
    };

    // useEffect(() => {
    //     getUserName();
    // }, []);

    // console.log(username);

    return (
        <View>
            <Text>AsyncStorageExample</Text>
            <TextInput
                placeholder="Enter text to store"
                value={username}
                onChangeText={setUserName}
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    margin: 10,
                    paddingLeft: 10,
                }}
            />
            <Button title="Save to AsyncStorage" onPress={saveUserName} />
            <Button title="Get from AsyncStorage" onPress={getUserName} />
            <Button title="Remove from AsyncStorage" onPress={removeUserName} />
            <Text>Stored Value: {username}</Text>
        </View>
    );
};
export default AsyncStorageExample;