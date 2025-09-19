import { View, Text } from 'react-native';
import FirstChildSubChildUseContext from './FirstChildSubChildUseContext';
const FirstChildUseContext = () => {
    return (
        <View>
            <Text>FirstChildUseContext</Text>
            <FirstChildSubChildUseContext />
        </View>
    );
};
export default FirstChildUseContext;