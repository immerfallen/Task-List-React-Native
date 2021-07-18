
import React, {Component} from 'react'
import {View, ActivityIndicator, StyleSheet} from 'react-native'

export default class AuthorOrApp extends Component {

    render() {
        return ( 
            <View style={styles.container}>
                <ActivityIndicator size='large' color={'#FFF'}/>
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    }
})