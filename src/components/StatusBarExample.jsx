import { View, Text, StatusBar, StyleSheet } from 'react-native';
const StatusBarExample = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>StatusBarExample</Text>
            <StatusBar
                barStyle={'light-content'}
                // backgroundColor="red"
                backgroundColor="rgba(0, 0, 0, 0.5 )"
                hidden={true}
                translucent={true}
            />
        </View>
    );
};
export default StatusBarExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#62aaf0'
    },
    text : {
        color : '#fff',
        fontSize : 18
    }
});