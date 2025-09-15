import { useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
const UseRefHook = () => {
    const myRef = useRef();
    
    const handleRef = () => {
        // myRef.current.setNativeProps({
        //     text : 'Vinay', 
        // });
        myRef.current.focus();
    };
    return (
        <View style={styles.container}>
            <Text>UseRefHook</Text>
            <TextInput
                ref={myRef}
                style={styles.input}
                placeholder='Enter you text'
                placeholderTextColor='#999'
            />
            <TouchableOpacity style={styles.button} onPress={handleRef}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};
export default UseRefHook;
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#ddd',
        padding : 20
    },
    input : {
        width : "100%",
        height :50,
        backgroundColor: '#fff',
        borderRadius :10,
        paddingHorizontal : 10,
        fontSize : 15,
        borderWidth : 1,
        borderColor :'#ccc',
        marginBottom : 20
    },
    button : {
        width : '100%',
        height : 50,
        backgroundColor : '#002bff',
        borderRadius : 10,
        justifyContent: 'center',
        alignItems : 'center'
    },
    buttonText : {
        color : '#fff',
        fontSize : 18,
        fontWeight : 'bold',
    }
});