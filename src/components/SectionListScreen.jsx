import { useState } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import styles from '../css/style';

const SectionListScreen = () => {

    const data = [
        {
            title : 'Fruits',
            data : [
                {id : 1, name : 'Apple'},
                {id : 2, name : 'Mango'},
                {id : 3, name : 'Banana'},
                {id : 4, name : 'Grapes'},
                {id : 5, name : 'Orange'}
            ]
        },{
            title : 'Vegetables',
            data : [
                {id : 1, name : 'Carret'},
                {id : 2, name : 'Bringal'},
                {id : 3, name : 'Potato'},
                {id : 4, name : 'Tomato'},
                {id : 5, name : 'Pumpkin'},
                {id : 6, name : 'Chilli'},
            ]
        },{
            title : 'Vegetables',
            data : [
                {id : 1, name : 'Carret'},
                {id : 2, name : 'Bringal'},
                {id : 3, name : 'Potato'},
                {id : 4, name : 'Tomato'},
                {id : 5, name : 'Pumpkin'},
                {id : 6, name : 'Chilli'},
            ]
        },{
            title : 'Animal',
            data : [
                {id : 1, name : 'Carret'},
                {id : 2, name : 'Bringal'},
                {id : 3, name : 'Potato'},
                {id : 4, name : 'Tomato'},
                {id : 5, name : 'Pumpkin'},
                {id : 6, name : 'Chilli'},
            ]
        },
    ];

    const renderSectionHeader = ({section}) => (
        <View style={style.item}>
            <Text style={{fontWeight:'bold', fontSize:16}}>{section.title}</Text>
        </View>
    );

    const renderItem = ({item}) => (
        <View style={style.item}>
            <Text style={{color:'red'}}>{item.name}</Text>
        </View>
    );

    return (
        <View style={{ padding: 10 }}>
            <Text style={styles.text}>Saction List</Text>
            <SectionList
                // sections={data}
                renderSectionHeader={renderSectionHeader}
                renderItem={renderItem}
                sections={data}
                keyExtractor={(item) => item.id}
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

export default SectionListScreen;