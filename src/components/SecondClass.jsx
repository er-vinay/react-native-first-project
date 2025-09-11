import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';

class SecondClass extends Component {
    constructor() {
        super();
        this.state = {
            myName: 'Vinay'
        }
    }

    updateName = () => {
        this.setState({myName : 'kumar'})
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 20 }}>Name : {this.state.myName}, Age : {this.props.data}</Text>
                <Button title='Update name' onPress={this.updateName} />
            </View>
        );
    }
}

export default SecondClass;