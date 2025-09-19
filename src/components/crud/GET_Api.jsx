import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
const GET_Api = () => {

    const [myData, setMyData] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:3000/users').then((response) => {
        //     response.json((result) => {
        //         console.log(result);
        //     });
        // });
        axios.get('http://10.0.2.2:3001/users').then((result) => {
            // console.log(result); 
            setMyData(result.data);
        });

    }, []);
    console.log(myData);

    return (
        <View>
            <Text style={{fontSize : 20, marginBottom :20}}>GET Api Method</Text>
            {
                myData.map((item) => {
                    return <Text key={item.id}>{item.name}</Text>
                })
            }
        </View>
    );
}
export default GET_Api