import { View, Text, ScrollView, StyleSheet } from 'react-native';
const Grid = () => {
    const data = [
        { id: 1, title: 'item1' },
        { id: 2, title: 'item2' },
        { id: 3, title: 'item3' },
        { id: 4, title: 'item4' },
        { id: 5, title: 'item5' },
        { id: 6, title: 'item6' },
        { id: 7, title: 'item7' },
        { id: 8, title: 'item8' },
        { id: 9, title: 'item9' },
        { id: 10, title: 'item10' },
        { id: 11, title: 'item11' },
        { id: 12, title: 'item12' },
        { id: 13, title: 'item13' },
        { id: 14, title: 'item14' },
        { id: 15, title: 'item15' },
    ];
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.heading}>Grid</Text>
            <ScrollView contentContainerStyle={styles.container}>
                {
                    data.map((item, index) => (
                        <View style={styles.gridItem} key={item.id}>
                            <Text style={styles.itemText}>{item.title}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f8f9fa',

    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#000'
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10
    },
    gridItem: {
        backgroundColor: '#ff6f61',
        padding: 10,
        marginBottom: 10,
        width: '48%',
        height: 100,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'uppercase'
    }
});
export default Grid;