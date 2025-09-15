import { View, Text, Pressable, StyleSheet } from 'react-native';
const PressableComponent = () => {
    const handlePress = () => {
        console.log('Onpress');
    }
    const handlePressIn = () => {
        console.log('OnpressIn');
    }
    const handlePressOut = () => {
        console.log('OnpressOut');
    }
    const handleLongPress = () => {
        console.log('OnpressLong'); // 500 mili seconds press
    }
    return (
        <View style={styles.container}>
            <Text>PressableComponent</Text>
            <Pressable 
                style={styles.button} 
                // onPress={handlePress}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onLongPress={handleLongPress}
                delayLongPress={5000}
                >
                <Text style={styles.buttonText}>Press me</Text>
            </Pressable>
        </View>
    );
};
export default PressableComponent;

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor : '#f5f5f5'
    },
    button : {
        padding : 10,
        borderRadius : 5,
        backgroundColor : '#007bbb',
    },
    buttonText : {
        fontSize : 18,
        color : '#fff'
    }
});