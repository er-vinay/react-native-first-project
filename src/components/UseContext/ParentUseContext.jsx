import { View, Text } from 'react-native';
import FirstChildUseContext from './FirstChildUseContext';
import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

const ParentUseContext = () => {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count + 1);
    };

    const decrementCounter = () => {
        setCount(count - 1);
    };

    return (
        <CounterContext.Provider value={{ count, incrementCounter, decrementCounter }}>
            <View style={{ flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', alignItems: 'center' }}>
                <Text>ParentUseContext</Text>
                <FirstChildUseContext />
            </View>
        </CounterContext.Provider>
    );
};
export default ParentUseContext;