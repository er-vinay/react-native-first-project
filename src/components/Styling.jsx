import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../css/style';

const Styling = () => {
    const [username, setUsername] = useState('');

    return (
        <View style={{ padding: 10 }}>
            <Text style={style.text}>Fosafsdrm</Text>
            <Text style={style.text}>Fosafsdrm</Text>
            <Text style={style.text}>Fosafsdrm</Text>
            <Text style={styles.text}>Fosafsdrm</Text>
        </View>
    );
};

const style = StyleSheet.create({
    text: {
        color: 'red',
        marginVertical: 10,
        backgroundColor: 'yellow',
        fontSize: 20,
        padding: 10,
        textAlign: 'center'
    }
});
export default Styling;