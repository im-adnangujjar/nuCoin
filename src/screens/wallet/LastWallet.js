import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { styles } from './LastWalletStyle'
import logo from '../../assets/images/walletlogo.png'
import image from '../../assets/images/person.png'
import icon1 from '../../assets/icons/Icon.png'
import wallet from '../../assets/images/wallet.png'
import Button from '../../compnent/button/Button'


const LastWallet = () => {
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

                <Text style={styles.text}>Congratulation</Text>
                <View style={styles.image_center}>
                    <Image source={wallet} />
                </View>
                <Text style={styles.title}>Your wallet with the name </Text>
                <Text style={styles.title}>Jhon Doe is created successfully</Text>
                <View style={styles.button}>
                <Button text='close' width={269}/>

                </View>

            </View>
        </ScrollView>
    )
}

export default LastWallet
