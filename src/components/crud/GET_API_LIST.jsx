import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import axios from 'axios'; 
import { API_ENDPOINTS } from '../../constants/api';

const GET_API_LIST = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        axios.get(API_ENDPOINTS.USERS).then((result) => {
            setUserList(result.data);
        }).catch((error) => {
            Alert.alert('Error fetching user list:', error);
        });
    }, []);

    console.log(userList); 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>GET_API_LIST</Text>
            <FlatList
                data={userList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.email}>{item.email}</Text>
                    </View>
                )}
            />
        </View>
    );
}
export default GET_API_LIST;

const styles = {
    container : {
        flex: 1,
        paddingVertical: '40%',
        backgroundColor: '#e0f7fa',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#00796b',
        marginBottom : 20,
        textAlign : 'center',
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#ffffff',
        marginBottom: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    itemContainerHover: {
        backgroundColor: '#f1f1f1',
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#004d40',
        marginBottom: 5
    },
    itemEmail: {
        color: '#666',
        fontSize: 14,
        marginBottom: 5
    },
};  