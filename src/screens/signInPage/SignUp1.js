import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import {styles} from './SignUpStyle'
import Button from '../../compnent/button/Button'

const SignUp1 = ({navigation}) => {
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
          <Button text='Back' width={138} />
          <Button click={() => navigation.navigate('Wallet')} text='Sign Up' width={138} />
        </View>

        <Text style={styles.account}>Already have an account?</Text>
        <Text style={styles.log}>Log In</Text>
        <Text style={styles.agree}>I have read and agreed to</Text>
        <Text style={styles.terms}>Terms and Conditions <Text style={styles.color}>and </Text>Privacy Policy</Text>
      </View>
    </ScrollView>
  )
}

export default SignUp1

