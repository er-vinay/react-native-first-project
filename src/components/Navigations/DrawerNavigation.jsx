
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Button } from 'react-native';
import React from 'react';
import {themeColor} from '../../css/style';

const Drawer = createDrawerNavigator();

// Home Screen Component
const HomeScreen = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
        />
    </View>
);

// Profile Screen Component
const ProfileScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);

// Setting Screen Component
const SettingScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Setting Screen</Text>
    </View>
);
const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                screenOptions={StylesDrawer}>
                <Drawer.Screen name="Dashboard" component={HomeScreen} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
                <Drawer.Screen name="Setting" component={SettingScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
export default DrawerNavigation;

const StylesDrawer = {
    drawerStyle: {
        backgroundColor: '#f0f0f0',
        width: '240',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    drawerLabelStyle: {
        color: '#000'
    },
    headerStyle: {
        backgroundColor: themeColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerTitleAlign: 'center',
};