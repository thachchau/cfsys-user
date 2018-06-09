import React, { Component } from "react";
import { Text, View, StatusBar } from 'react-native';

StatusBar.setHidden(true);

export default class Main extends Component {
    render() {
        return (
            <View style={{flex: 1, alignSelf: 'center', marginTop: 200}}>
                <Text>END-USER SIDE</Text>
            </View>
        );
    }
}
