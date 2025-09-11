import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
export default function StyleWithButton() {
    return (
        <View>
            <Text style={styles.Text}>StyleWithButton</Text>

            <Button title='Basic Button' color={'red'} />

            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.buttonText}>Touchable Opacity</Text>
            </TouchableOpacity>

            <TouchableHighlight style={styles.button} underlayColor='#31A' onPress={() => {}}>
                <Text style={styles.buttonText}>Touchable Highlight</Text>
            </TouchableHighlight>

        </View>
    );
};

const styles = StyleSheet.create({
    Text: {
        fontSize: 30
    },
    button: {
        margin: 20,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#d24714ff',
        // elevation: 5
    },
    buttonText : {
        color:'#fff',
        fontWeight : 'bold',
        textAlign : 'center',
        fontSize:20
    }
});