import React, { Component } from "react";
import { Text, View } from "react-native";
import SecondClass from './SecondClass'

class ClassComponents extends Component {
    render() {
        const age = 22;
        return (
            <View>
                <Text>Class components</Text>
                <SecondClass data={age} />
            </View>
        );
    };
}

export default ClassComponents;