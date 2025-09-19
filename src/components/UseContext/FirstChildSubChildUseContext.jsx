import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { CounterContext } from './ParentUseContext';
const FirstChildSubChildUseContext = () => {
    const { count, incrementCounter, decrementCounter } = useContext(CounterContext);
    return (
        <View>
            <Text>FirstChildSubChildUseContext</Text>
            <Text>count : {count}</Text>
            <Button title="+" onPress={incrementCounter} />
            <Button title="-" onPress={decrementCounter} />
        </View>
    );
};
export default FirstChildSubChildUseContext;