import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const POST_Api = () => {

    const [formData, setFormData] = useState({ id: '', name: '', email: '' });

    const handleInput = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async () => {
        try {
            for (const [key, value] of Object.entries(formData)) {
                if (!value.trim()) {
                    Alert.alert('Error', `${key} is required.`);
                    return; // stop execution
                }
            }

            const response = await axios.post('http://10.0.2.2:3001/users', formData);
            Alert.alert("Success!", "Data submitted successfully.");
            setFormData({ id: '', name: '', email: '' });
        } catch (error) {
            Alert.alert('Error', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 20 }}>POST_Api</Text>

            <TextInput style={styles.inputText} placeholder='Enter ID' onChangeText={(value) => { handleInput('id', value) }} value={formData.id} />
            <TextInput style={styles.inputText} placeholder='Enter Name' onChangeText={(value) => { handleInput('name', value) }} value={formData.name} />
            <TextInput style={styles.inputText} placeholder='Enter Email' onChangeText={(value) => { handleInput('email', value) }} value={formData.email} />

            <Button style={styles.button} title='Submit' onPress={handleSubmit} />
        </View>
    );
};
export default POST_Api;

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