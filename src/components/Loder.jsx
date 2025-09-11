import { useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
const Loder = () => {

    const [loading, setLoading] = useState(false);

    return (
        <View style={styles.container}>
            {/* <ActivityIndicator size="small" color='#31a233' /> */}

            <TouchableOpacity style={styles.button} onPress={() => setLoading(!loading)} >
                <Text style={styles.buttonText}>{ loading ? 'Show loader' : 'hide loader'}</Text>
            </TouchableOpacity>
            {
                loading && (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" color='#31a233' />
                        <Text style={styles.loadingText}>Loading...</Text>
                    </View>
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#f0f0f0'
    },
    button: {
        margin: 20,
        padding: 20,
        borderRadius: 20,
        backgroundColor: "#13ee",
        elevation: 5
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    },
    loaderContainer : {
        width : 120,
        height :120,
        backgroundColor : '#fff',
        borderRadius: 10,
        shadowColor : '#000',
        elevation : 5,
        alignItems : 'center',
        justifyContent :'center'
    },
    loadingText : {
        marginTop : 10,
        fontSize : 16,
        color : '#4CAF',
        fontWeight : 'bold'
    }
});
export default Loder;