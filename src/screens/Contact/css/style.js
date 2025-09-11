import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        color: 'red',
        alignItems: 'center',
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    list: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 20
    },
    item: {
        backgroundColor: 'crimson',
        padding: 15,
        marginVertical: 2,
        borderRadius: 5
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    email: {
        fontSize: 12,
        color: '#ccc'
    }
});