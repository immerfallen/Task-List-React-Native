import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import {DrawerItems} from  'react-navigation-drawer'
import { Gravatar } from 'react-native-gravatar'
import commonStyles from '../commonStyles'

export default props => {
    const optionsGravatar ={

    }
    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>Tasks</Text>
                <Gravatar style={styles.avatar} options={{
                    email: props.navigation.getParam('email'), 
                    secure: true
                }}/>
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{props.navigation.getParam('name')}</Text>
                    <Text style={styles.email}>{props.navigation.getParam('email')}</Text>
                </View>
            </View>
            
            <DrawerItems {...props}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header:{
        borderBottomWidth: 1,
        borderColor: '#DDD'
    },
    avatar:{
        width: 50,
        height: 50,
        borderWidth: 3,
        borderRadius: 30,
        margin: 10,
        backgroundColor: '#222'
    },
    title: {
        color: '#000',
        fontFamily: commonStyles.fontFamily,
        fontSize: 30,
        paddingTop: 20,
        padding: 10
    },
    userInfo: {
        marginLeft: 10
    },
    name:{
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,        
        color: commonStyles.colors.text
    },
    email:{
        fontFamily: commonStyles.fontFamily,
        fontSize: 15,
        color: commonStyles.colors.subText,
        marginBottom: 5
    }
})

