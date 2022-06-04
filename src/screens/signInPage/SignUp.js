import { StyleSheet, ScrollView, SafeAreaView, Text, View, TextInput } from 'react-native'
import { styles } from './SignUp1Style'
import React from 'react'
import Button from '../../compnent/button/Button'

const SignIn = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView />
            <View>
                <Text style={styles.title}>Sign up</Text>
                <Text style={styles.title}>to continue</Text>
                <Text style={styles.lable}>User Name</Text>
                <TextInput style={styles.input} placeholder="" />
                <Text style={styles.lable}>First Name</Text>
                <TextInput style={styles.input} placeholder="" />
                <Text style={styles.lable}>Last Name</Text>
                <TextInput style={styles.input} placeholder="" />
                <Text style={styles.lable}>Birthdate</Text>
                <TextInput style={styles.input} placeholder="" />
                <Text style={styles.lable}>Select Gender</Text>
                <View style={styles.buttons}>
                    <Button text='Male' width={141} height={34} />
                    <Button text='Female' width={141} height={34} />
                </View>
                <Button click={() => navigation.navigate('SignUp1')} text='Next' width={295} />
                <Text style={styles.account}>Already have an account?</Text>
                <Text style={styles.log}>Log In</Text>
            </View>
        </ScrollView>
    )
}

export default SignIn
