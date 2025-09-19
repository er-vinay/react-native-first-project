import { StyleSheet } from "react-native";
export const primaryColor = '#00796b';
export const secondaryColor = '#004d40';
export const themeColor = '#f4511e';
export const backgroundColor = '#e0f7fa';
export const textColor = '#000';

const styles = StyleSheet.create({
    mainContainer : {
        flex: 1,
        // padding : 20,
        top : 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: primaryColor,
        marginTop : 10,
        marginBottom : 20,
        textAlign : 'center',
        borderBottomWidth : 1,
        borderBottomColor : '#ccc',
        paddingBottom : 10,
    },
    text: {
        color: '#000',
        marginVertical: 10,
        fontSize: 18,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#00796b',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    }
});

export default styles;