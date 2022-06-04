import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './Wallet3Style'
import logo from '../../assets/images/walletlogo.png'
import image from '../../assets/images/person.png'
import icon1 from '../../assets/icons/Icon.png'
import Button from '../../compnent/button/Button'

const Wallet3 = ({navigation}) => {
    return (
        <ScrollView style={styles.container} >
            <SafeAreaView />
            <View style={styles.subContainer}>
                <View style={styles.bar}>
                    <Image source={logo} />
                    <View style={styles.image}>
                        <Image style={styles.image_margin} source={icon1} />
                        <Image source={image} />
                    </View>
                </View>
                <View style={styles.title_flex}>
                    <Text style={styles.title}>Create Wallet</Text>
                    <Text style={styles.numbers}>03. <Text style={styles.numbers1}>03</Text></Text>
                </View>
                <TextInput style={styles.input} placeholder="Enter Wallet Name" />
                <TextInput style={styles.input} placeholder="Enter Wallet Password" />
                <TextInput style={styles.input} placeholder="Confirm Wallet Password" />
                <View style={styles.button_flex}>
                    <Button text='Cancal' width={170} height={54} /> 
                    <Button  click={()=>navigation.navigate('LastWallet')} text='Submit' width={170} height={54}/></View>
            </View>
        </ScrollView>
    )
}

export default Wallet3
