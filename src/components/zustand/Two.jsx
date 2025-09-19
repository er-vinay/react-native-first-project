import { View, Text, Button } from 'react-native';
import { useCounterState } from '../../zustand/store';
const Two = () => {
    const { count, increment, decrement } = useCounterState();
    return (
        <View>
            <Text>Two</Text>
            <Text>Count : {count}</Text>
            <Button title='+' onPress={increment} />
            <Button title='-' onPress={decrement} />
        </View>
    );
};
export default Two;