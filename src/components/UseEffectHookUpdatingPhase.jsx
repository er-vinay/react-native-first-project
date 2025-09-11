import { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
const UseEffectHookUpdatingPhase = () => {

    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(20);

    useEffect(() => {
        console.log('Im a useEffect hook.');
    }, [counter]);

    return (
        <View>
            <Text>UseEffectHookUpdatingPhase</Text>
            <Text>Counter : {counter}</Text>
            <Text>score : {score}</Text>
            <Button title='Counter' onPress={() => setCounter(counter +1)} />
            <Button title='Score' onPress={() => setScore(score +10)} />
            <InfoDetails count={counter} points={score}/>
        </View>
    );
};

const InfoDetails = ({count, points}) => {
    return (
        <View>
            <Text>Count : {count}</Text>
            <Text>Score : {points}</Text>
        </View>
    );
}
export default UseEffectHookUpdatingPhase;