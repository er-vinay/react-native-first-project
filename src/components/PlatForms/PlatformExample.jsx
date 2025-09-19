import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

const PlatformExample = () => {
    return (
        <View style={styles.container}>

            {/* 'ios' or 'android'  */}
            <Text style={styles.text}>
                {`You are running on: ${Platform.OS.toUpperCase()}`} 
            </Text>
            <Text style={styles.text}>
                {`App Version: ${Platform.Version}`}
                {
                    Platform.select({
                        ios: ' (iOS)',
                        android: ' (Android)',
                        macos: ' (MacOS)',
                        default: ' (Unknown Platform)'
                    })
                }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Platform.OS === 'ios' ? '#f0f8ff' : '#ffe4e1',

    },
    text: {
        fontSize: 18,
        margin: 10,
    },
});

export default PlatformExample;