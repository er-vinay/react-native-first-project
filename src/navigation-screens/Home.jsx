import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import mainStyles from '../css/style';

const Home = (props) => {
    const data = [
        { id: 1, title: 'Quick Apply For a Loan', route: 'ApplyNow' },
        { id: 2, title: 'Repay Loan', route: 'RepayLoan' },
        { id: 3, title: 'My Loans', route: 'Search' },
        { id: 4, title: 'My Profile', route: 'MyProfile' },
        { id: 10, title: 'Logout', route: 'Login' },
    ];
    const { mobile, otpSent } = props.route.params;
    const navigation = useNavigation();

    return (
        <View style={mainStyles.mainContainer}>
            <Text style={mainStyles.title}>Welcome to Dashboard : {mobile}</Text>

            <ScrollView contentContainerStyle={styles.container}>
                {
                    data.map((item, index) => (
                        <View style={styles.gridItem} key={item.id} >
                            {/* <Text style={styles.itemText} >{item.title}</Text> */}

                            <Text style={styles.itemText} onPress={() => navigation.navigate(item.route, { title: item.title })}>
                                {item.title}
                            </Text>
                        </View>
                    ))
                }
            </ScrollView>
            {/* <Button title="Go to About" onPress={() => navigation.navigate('About')} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 15,
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
        backgroundColor: '#fc6a01',
        padding: 10,
        marginBottom: 10,
        width: '100%',
        height: 50,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        // textTransform: 'uppercase'
    }
});
export default Home;