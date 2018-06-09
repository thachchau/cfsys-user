import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import EndUserSide from './src/index';

export default class EndUserSideAndroid extends Component{
    render(){
        return <EndUserSide />
    }
}

AppRegistry.registerComponent('EndUserSideAndroid', () => EndUserSideAndroid);
