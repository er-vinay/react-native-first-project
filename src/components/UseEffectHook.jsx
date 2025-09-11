import { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
const UseEffectHook = () => {

    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log('calling useEffect()');
    }, []);

    return (
        <View>
            <Text style={{ fontSize: 29 }}>UseEffectHook</Text>
            <Text style={{ fontSize: 19 }}>Counter : {count}</Text>
            <Button title='Count' onPress={() => setCount(count + 1)} />
        </View>
    );
};
export default UseEffectHook;