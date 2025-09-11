import { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../css/style';
const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Email : ', email);
        console.log('Password : ', password);
        setEmail('');
        setPassword('');
    };

    return (
        <View style={formStyle.container}>

            <Text style={formStyle.heading}>LoginForm</Text>
            
            <TextInput style={formStyle.input}
                placeholder='Email'
                value={email}
                onChange={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
                placeholderTextColor="#999"
            />

            <TextInput style={formStyle.input}
                placeholder='Password'
                value={password}
                onChange={setPassword}
                autoCapitalize='none'
                placeholderTextColor='#999'
                secureTextEntry
            />

            <TouchableOpacity style={formStyle.button} onPress={handleLogin}>
                <Text style={formStyle.buttonText}>Reset</Text>
            </TouchableOpacity>

            {/* <Button title='Reset' /> */}
        </View>
    );
};

const formStyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: '#f0f0f0'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: "#1e1a1e55"
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#333'
    },
    button : {
        backgroundColor:'#6200ee',
        paddingVertical: 20,
        borderRadius:10,
        alignItems: 'center'
    },
    buttonText : {
        color:'#fff',
        fontSize:18,
        fontWeight: 'bold'
    }
});
export default LoginForm;