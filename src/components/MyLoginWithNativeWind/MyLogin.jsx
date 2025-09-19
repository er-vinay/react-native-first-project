import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
const MyLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View className="flex-1 justify-center text-center bg-gray-900">
            <Text className="text-4xl font-bold text-white mb-8">Welcome MyLogin</Text>
            <TextInput 
                placeholder='Enter your email'
                placeholderTextColor={'#ccc'}
                className="w-full h-12 bg-gray-800 p-5 border border-gray-50 rounded-lg px-4 mx-4"
                value={email}
                onChange={setEmail}
                autoComplete='none'
                keyboardType='email-address'
            />
            <TextInput 
                placeholder='Enter your password'
                placeholderTextColor={'#ccc'}
                className="w-full h-12 bg-gray-800 p-5 border border-gray-50 rounded-lg px-4 mx-4"
                value={password}
                onChange={setPassword}
                autoComplete='none'
                secureTextEntry
            />
            <TouchableOpacity className="w-full bg-indigo-500 py-3 rounded-lg">
                <Text className="text-center text-white text-lg font-semibold">Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity className="mt-4">
                <Text className="text-indigo-300 text-center">Forget Password</Text>
            </TouchableOpacity>
        </View>
    );
};
export default MyLogin;