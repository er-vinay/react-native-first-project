import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { themeColor } from '../../css/style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
    </View>
);

const ProfileScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);

const SettingsScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Screen</Text>
    </View>
);

const AboutScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>About Screen</Text>
    </View>
);

const getTabBarIcon = (routeName, focused, color, size) => {
    // You can return any component that you like here!
    // For simplicity, we'll just return a Text component
    let iconName;
    if (routeName === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
    } else if (routeName === 'Profile') {
        iconName = focused ? 'person' : 'person-outline';
    } else if (routeName === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
    } else if (routeName === 'About') {
        iconName = focused ? 'information-circle' : 'information-circle-outline'; 
    }

    return <Ionicons name={iconName} size={size} color={color} />;
    // return <Text style={{ color: focused ? 'blue' : 'gray', fontSize: size }}>{iconName}</Text>;
};

const BottomTabNavigation = () =>  (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => 
                    getTabBarIcon(route.name, focused, color, size),
                    tabBarActiveTintColor: themeColor,
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: { paddingBottom: 5, height: 60 }
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
    </NavigationContainer>
);
export default BottomTabNavigation;