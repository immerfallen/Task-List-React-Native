import React, { Component } from 'react'
import {ImageBackground,Text, StyleSheet, View, TextInput, TouchableOpacity, Platform} from 'react-native'

import backgroundImage from '../../assets/imgs/login.jpg'

import commomStyles from '../commonStyles'

export default class Auth extends Component {

    state={
        email: '',
        password: ''
    }

    render (){
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
            <Text style={styles.title}>Tasks</Text>
            <View style={styles.formContainer}>
                <TextInput placeholder='E-mail' value={this.state.email} style={styles.input} onChangeText={email => this.setState({email:email})}/>
                <TextInput placeholder='Senha' value={this.state.passwordl} style={styles.input} onChangeText={password => this.setState({password:password})}/>
                <TouchableOpacity>
                    <View style={ styles.button}>
                        <Text style={ styles.buttonText}>Entrar</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: commomStyles.fontFamily,
        color: commomStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10
    },
    input: {
        backgroundColor: '#FFF',
        marginTop: 10,
        padding: Platform.OS == 'ios' ? 20 : 10 
    },
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 20,
        width: '90%'
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: commomStyles.fontFamily,
        color: '#fff',
        fontSize: 20
    }

    
})