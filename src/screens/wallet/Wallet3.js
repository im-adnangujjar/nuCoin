import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './Wallet3Style'
import Button from '../../compnent/button/Button'
import Header from '../../compnent/header/Header'

const Wallet3 = ({ navigation }) => {
    return (
        <ScrollView style={styles.container} >
            <SafeAreaView />
            <View style={styles.subContainer}>
                <Header />
                <View style={styles.title_flex}>
                    <Text style={styles.title}>Create Wallet</Text>
                    <Text style={styles.numbers}>03. <Text style={styles.numbers1}>03</Text></Text>
                </View>
                <TextInput style={styles.input} placeholder="Enter Wallet Name" />
                <TextInput style={styles.input} placeholder="Enter Wallet Password" />
                <TextInput style={styles.input} placeholder="Confirm Wallet Password" />
                <View style={styles.button_flex}>
                    <Button text='Cancal' width={170} height={54} />
                    <Button click={() => navigation.navigate('LastWallet')} text='Submit' width={170} height={54} /></View>
            </View>
        </ScrollView>
    )
}

export default Wallet3
