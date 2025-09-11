import { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import ShowChild from './ShowChild'

const UseEffectHookUnmountingPhase = () => {
    const [showChild, setShowChild] = useState(true);
    // const [counter, setCounter] = useState(0);
    // const [score, setScore] = useState(20);

    // useEffect(() => {
    //     console.log('Im a useEffect hook.');
    // }, [counter]);

    return (
        <View>
            <Text style={{fontSize:30}}>Parent component</Text>
            {
                showChild ? <ShowChild /> : null
            }
            <Button title='Toggle' onPress={() => setShowChild(!showChild)} />
        </View>
    );
};

export default UseEffectHookUnmountingPhase;