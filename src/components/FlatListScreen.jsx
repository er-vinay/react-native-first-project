import { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import styles from '../css/style';

const FlatListScreen = () => {

    const data = [
        { id: 1, title: 'Item 1' },
        { id: 2, title: 'Item 2' },
        { id: 3, title: 'Item 3' },
        { id: 4, title: 'Item 4' },
        { id: 5, title: 'Item 5' }
    ];

    const renderItem = ({item}) => (
        <View style={style.item}>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
        </View>
    );

    return (
        <View style={{ padding: 10 }}>
            <Text style={styles.text}>List</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={style.list}
            />
        </View>
    );
};

const style = StyleSheet.create({
    container : {
        padding:10,
    },
    list: {
        paddingHorizontal:10
    },
    item : {
        // backgroundColor: '#ccc',
        borderWidth:0.5,
        // borderRadius:5,
        marginHorizontal:10,
        padding:10,
        shadowColor: '#ccc',
        shadowOffset: {
            width:0,
            height:2
        },
        shadowOpacity:1,
        shadowRadius:5,
        elevation:2
    },
});

export default FlatListScreen;