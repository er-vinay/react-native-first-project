// import { View, Text, Button } from 'react-native';
import 'react-native-gesture-handler';
import { Button, Image, Text, View } from 'react-native';
import React from 'react';
// import First from './src/components/First';
// import JSX from './src/components/JSX';
// import OnPress from './src/components/OnPress';
// import UseStateHook from './src/components/UseStateHook';
// import Props from './src/components/Props';
// import InputText from './src/components/InputText';
// import FlatListScreen from './src/components/FlatListScreen';
// import SectionListScreen from './src/components/SectionListScreen';
// import LoginForm from './src/components/LoginForm';
// import ContactListScreen from './src/screens/Contact/ContactListScreen';
// import Grid from './src/components/Grid';
// import ClassComponents from './src/components/ClassComponents';
// import UseEffectHook from './src/components/UseEffectHook';
// import UseEffectHookUpdatingPhase from './src/components/UseEffectHookUpdatingPhase';
// import UseEffectHookUnmountingPhase from './src/components/UseEffectHookUnmountingPhase';
// import HideShowToggle from './src/components/HideShowToggle';
// import StyleWithButton from './src/components/StyleWithButton';
// import Loder from './src/components/Loder';
// import PressableComponent from './src/components/PressableComponent';
// import StatusBarExample from './src/components/StatusBarExample';
// import UseRefHook from './src/components/UseRefHook';
// import ModalDilogBox from './src/components/ModalDilogBox';
// import AlertExample from './src/components/AlertExample';
// import GET_Api from './src/components/crud/GET_Api';
// import POST_Api from './src/components/crud/POST_Api';
// import PUT_Api from './src/components/crud/PUT_Api';
// import PATCH_Api from './src/components/crud/PATCH_Api';
// import DELETE_Api from './src/components/crud/DELETE_Api';
// import GET_API_LIST from './src/components/crud/GET_API_LIST';
// import PlatformExample from './src/components/PlatformExample';
import Search from './src/components/Search';
// import Login from './src/components/Login/Login';
// import Register from './src/components/Login/Register';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/navigation-screens/Login';
import Home from './src/navigation-screens/Home';
import About from './src/navigation-screens/About';
import Header from './src/components/Header';
import DrawerNavigation from './src/components/Navigations/DrawerNavigation';
import BottomTabNavigation from './src/components/Navigations/BottomTabNavigation';
import TopTabNavigation from './src/components/Navigations/TopTabNavigation';
import AsyncStorageExample from './src/components/AsyncStorage/AsyncStorageExample';
import ImageComponentExample from './src/components/ImageComponent/ImageComponentExample';
import ParentUseContext from './src/components/UseContext/ParentUseContext';
import { Provider } from 'react-redux';
import { store } from './src/ReduxToolkit/Store/store';
import Counter from './src/components/ReduxToolkit/Counter';
import One from './src/components/zustand/One';
import MyLogin from './src/components/MyLoginWithNativeWind/MyLogin';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile')}
        />
    </View>
);

const ProfileScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);


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
const App = () => {
    return (
        // <DrawerNavigation />
        // <BottomTabNavigation />
        // <TopTabNavigation />
        // <AsyncStorageExample />
        // <ImageComponentExample />



        // Redux ToolKit start
        // <Provider store={store}>
        //     <Counter />
        // </Provider>
        // Redux ToolKit end


        // <View>
        //     <ParentUseContext />
        // </View>



        // zustand start
        <View style={{flex:1}}>
            {/* <One /> */}
            <MyLogin />
        </View>
        // zustand end



        // <Stack.Navigator>
        //     <Stack.Screen name="Login" component={Login} options={{headerShown : false}} />

        // <View style={{ flex: 1 }}>
        //     <NavigationContainer>
        //         <Stack.Navigator>
        //             <Stack.Screen name="Header" component={Header} options={{
        //                 title: '',
        //                 headerLeft : HeaderLeft,
        //                 headerRight : HeaderRight
        //             }} />
        //             <Stack.Screen name="Login" component={Login} options={{headerShown : false}} />
        //             <Stack.Screen name="Home" component={Home} options={{headerShown : false}} />
        //             <Stack.Screen name="About" component={About} />
        //             <Stack.Screen name="Search" component={Search} options={{headerShown : false}} />
        //         </Stack.Navigator>
        //     </NavigationContainer>
        // </View>
        
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //     <Text>Hello, React Native!</Text>
        //     {/* <First /> */}
        //     {/* <JSX /> */}
        //     {/* <OnPress /> */}
        //     {/* <UseStateHook /> */}
        //     {/* <Props name="John Doe" age={30} /> */}
        //     {/* <InputText /> */}
        //     {/* <FlatListScreen /> */}
        //     {/* <SectionListScreen /> */}
        //     {/* <LoginForm /> */}
        //     {/* <ContactListScreen /> */}
        //     {/* <Grid /> */}
        //     {/* <ClassComponents /> */}
        //     {/* <UseEffectHook /> */}
        //     {/* <UseEffectHookUpdatingPhase /> */}
        //     {/* <UseEffectHookUnmountingPhase /> */} //     {/* <HideShowToggle /> */}
        //     {/* <StyleWithButton /> */}
        //     {/* <Loder /> */}
        //     {/* <PressableComponent /> */}
        //     {/* <StatusBarExample /> */}
        //     {/* <UseRefHook /> */}
        //     {/* <ModalDilogBox /> */}
        //     {/* <AlertExample /> */}
        //     {/* <GET_Api /> */}
        //     {/* <POST_Api /> */}
        //     {/* <PUT_Api /> */}
        //     {/* <PATCH_Api /> */}
        //     {/* <DELETE_Api /> */}

            // {/* <GET_API_LIST /> */}
            // {/* <PlatformExample /> */}
            // {/* <Search /> */}
        // </View>
    );
};

export default App;