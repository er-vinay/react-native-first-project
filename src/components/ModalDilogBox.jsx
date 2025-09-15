import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
const ModalDilogBox = () => {
    const [modalVisible, setModelVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Text>ModalDilogBox</Text>
            <TouchableOpacity style={styles.button} onPress={() => setModelVisible(true)}>
                <Text style={styles.text}>Press Me</Text>
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                animationType='fade'
                transparent={true}
                onRequestClose={() => setModelVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Beautiful Modal</Text>
                        <Text style={styles.modalText}>This is Beautiful Modal</Text>
                        <TouchableOpacity style={styles.modalClose} onPress={() => setModelVisible(false)}>
                            <Text style={styles.modalCloseText}>Close Model</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
export default ModalDilogBox;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
        padding: 10
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#333ee2',
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalView: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        elevation: 5
    },
    modalTitle : {
        fontSize :22,
        fontWeight : 'bold',
        marginBottom : 10,
        color : '#333'
    },
    modalText : {
        fontSize :16,
        textAlign :'center',
        color : '#555'
    },
    modalClose :{
        backgroundColor :"#03dace",
        paddingHorizontal : 20,
        paddingVertical : 20,
        borderRadius : 20,
        elevation :2
    },
    modalCloseText :{
        color : '#fff',
        fontSize :12,
        fontWeight :'bold'
    }
});