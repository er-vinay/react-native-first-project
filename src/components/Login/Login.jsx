import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
    const [mobile, setMobile] = useState('');
    const [checked, setChecked] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const navigation = useNavigation();

    const handleLogin = () => {
        // Add login logic here
        setOtpSent(true);
    };

    const handleResendOtp = () => {
        // Add resend OTP logic here
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.form}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter mobile number"
                    keyboardType="phone-pad"
                    value={mobile}
                    onChangeText={setMobile}
                    maxLength={10}
                />
                <View style={styles.checkboxContainer}>
                    <TouchableOpacity onPress={() => setChecked(!checked)} style={styles.checkbox}>
                        <View style={[styles.checkboxBox, checked && styles.checkboxChecked]} />
                    </TouchableOpacity>
                    <Text style={styles.checkboxLabel}>I accept Terms & Conditions</Text>
                </View>
                <TouchableOpacity
                    style={[styles.button, !(mobile.length === 10 && checked) && styles.buttonDisabled]}
                    onPress={handleLogin}
                    disabled={!(mobile.length === 10 && checked)}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.registerLink}>
                    <Text style={styles.registerText}>Don't have an account? Register</Text>
                </TouchableOpacity>
                {otpSent && (
                    <TouchableOpacity onPress={handleResendOtp} style={styles.resendOtp}>
                        <Text style={styles.resendOtpText}>Resend OTP</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    registerLink: {
        marginTop: 18,
        alignItems: 'center',
    },
    registerText: {
        color: '#00796b',
        fontSize: 15,
        textDecorationLine: 'underline',
    },
    resendOtp: {
        marginTop: 16,
        alignItems: 'center',
    },
    resendOtpText: {
        color: '#d32f2f',
        fontSize: 15,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#e0f7fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 20,
    },
    form: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00796b',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#b2dfdb',
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        marginBottom: 20,
        backgroundColor: '#f1f1f1',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        marginRight: 8,
    },
    checkboxBox: {
        width: 22,
        height: 22,
        borderWidth: 2,
        borderColor: '#00796b',
        borderRadius: 6,
        backgroundColor: '#fff',
    },
    checkboxChecked: {
        backgroundColor: '#00796b',
        borderColor: '#00796b',
    },
    checkboxLabel: {
        fontSize: 15,
        color: '#333',
    },
    button: {
        backgroundColor: '#00796b',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#b2dfdb',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});