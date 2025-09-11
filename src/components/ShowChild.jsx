import { useEffect } from 'react';
import { View, Text } from 'react-native';
const ShowChild = () => {
    useEffect(() => {
        // console.log('im child useEffect hook. calling from ShowChild.');
        return () => {
            console.log('Child component unmounted.');
        }
    }, []);
    return (
        <View>
            <Text>ShowChild</Text>
        </View>
    );
};
export default ShowChild;