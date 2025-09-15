import { View, Text, Button, Alert, StyleSheet } from 'react-native';


const showAlert = () => {
    Alert.alert(
        'Alert title',
        'lert message',
        [
            {
                'text' : 'Cancle',
                onPress : () => console.log('Cancle'),
                style : 'cancel',
            },
            {
                text : 'OK',
                onPress : () => console.log('OK')
            }
        ],
        {
            cancelable : false,
        }
    );  
};
const AlertExample = () => {

    return (
        <View>
            <Text>AlertExample</Text>
            <Button title='Show Alert' onPress={() => showAlert()}/> 
        </View>
    );
};
export default AlertExample;