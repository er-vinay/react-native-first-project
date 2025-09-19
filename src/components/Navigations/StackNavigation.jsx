// import { View, Text, Button } from 'react-native';
// import 'react-native-gesture-handler';
import { Button, Image, Text, View } from 'react-native';
import React from 'react';
import Search from './src/components/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/navigation-screens/Login';
import Home from './src/navigation-screens/Home';
import About from './src/navigation-screens/About';
import Header from './src/components/Header';

const Stack = createNativeStackNavigator();


const HeaderOptions = {
    title: '',
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};
const HeaderLeft = () => (
    <Button
        title= "LOGO"
        onPress={() => alert('This is a button!')}
        color="#000"
    />
);  
const styles = {
    image: {
        width: 100,
        height: 40,
        marginRight: 10,
    },
};
const HeaderRight = () => (
    <Image
        source={{ uri: 'https://speedoloan.com/static/media/speedologo.f6f82579cff9c5a93ad1.webp' }}
        style={styles.image}
        resizeMode="cover"
    />
);  
const StackNavigation = () => {
    return (

        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Header" component={Header} options={{
                        title: '',
                        headerLeft : HeaderLeft,
                        headerRight : HeaderRight
                    }} />
                    <Stack.Screen name="Login" component={Login} options={{headerShown : false}} />
                    <Stack.Screen name="Home" component={Home} options={{headerShown : false}} />
                    <Stack.Screen name="About" component={About} />
                    <Stack.Screen name="Search" component={Search} options={{headerShown : false}} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};

export default StackNavigation;