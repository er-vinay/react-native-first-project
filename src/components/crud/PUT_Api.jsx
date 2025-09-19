import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
const PUT_Api = () => {

    const [formData, setFormData] = useState({ id: '', name: '', email: '' });

    const handleInput = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleUpdate = async () => {
        try {

            for (const [key, value] of Object.entries(formData)) {
                if (!value.trim()) {
                    Alert.alert('Error', `${key}. is required.`);
                    return; // stop execution
                }
            }

            const response = await axios.put(
                `http://10.0.2.2:3001/users/${formData.id}`,
                {
                    name: formData.name,
                    email: formData.email,
                }
            );

            console.log(response);

            Alert.alert('Success!', 'Data updated successfully.');
            setFormData({ id: '', name: '', email: '' });

        } catch (error) {
            console.log(error);
            Alert.alert('Error!', "some error failed ot update");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', marginVertical: 20, fontSize: 18 }}>PUT_Api</Text>
            <TextInput style={styles.inputText} placeholder='Enter ID' onChangeText={(value) => { handleInput('id', value) }} value={formData.id} />
            <TextInput style={styles.inputText} placeholder='Enter Name' onChangeText={(value) => { handleInput('name', value) }} value={formData.name} />
            <TextInput style={styles.inputText} placeholder='Enter Email' onChangeText={(value) => { handleInput('email', value) }} value={formData.email} />

            <Button title='Update' onPress={handleUpdate} />
        </View>
    );
};
export default PUT_Api;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 20,
        margin: 20,
    },
    inputText: {
        marginVertical: 20,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        height: 50,
        fontSize: 16
    }
});