import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../../ReduxToolkit/Slice/counterSlice';
const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <View>
            <Text>Counter : {count}</Text>
            <Button title='+' onPress={() => dispatch(increment())} />
            <Button title='-' onPress={() => dispatch(decrement())} />
            <Button title='Reset' onPress={() => dispatch(reset())} />
        </View>
    );
};
export default Counter;