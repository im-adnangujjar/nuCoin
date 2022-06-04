import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, } from 'react-native'
import React from 'react'
import { styles } from './walletStyle'
import logo from '../../assets/images/walletlogo.png'
import image from '../../assets/images/person.png'
import icon1 from '../../assets/icons/Icon.png'
import WalletButton from '../../compnent/walletButoon /WalletButton'
import { data } from '../../constant/constant'
import copy from '../../assets/icons/copy_icon.png'
import Button from '../../compnent/button/Button'
import LinearGradient from 'react-native-linear-gradient';


export default function Wallet({ navigation }) {

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
        <Text style={styles.title}>Create Wallet</Text>
        <LinearGradient start={{ x: 0, y: -1 }} end={{ x: 1, y: 1 }} colors={['#ECB8B8', '#FFFFFF']} style={styles.linearGradient}>
          <View  style={styles.bgColor}><Text style={styles.descripation}>PLease copy down the mnemonic for you new account below. If you loose these mnemonics, you will risk loosing your coins (wealth). You will have to confirm the mnemonic on the text sceen</Text></View>
        </LinearGradient>
        <View style={styles.button_align}>
          {
            data.map((item, index) => {
              return <WalletButton key={index} item={item} />
            })
          }
        </View>
        <View style={styles.text_flex}>
          <Text styles={styles.copy}>Copy to Clipboard</Text>
          <Image style={styles.icon} source={copy} />
        </View>
        <View style={styles.bar}>
          <Button text='cancal' width={170} height={54} />
          <Button click={() => navigation.navigate('Wallet3')} text='continue' width={170} height={54} />
        </View>
      </View>
    </ScrollView>
  )
}
