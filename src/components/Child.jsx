import { View, Text } from 'react-native';
const Child = (props) => {
    let count = props.data;
    let item = props.item;

  return (
    <View>
      <Text>Child{ count }</Text>
      <Text>Child{ item }</Text>
    </View>
  );
};
export default Child;