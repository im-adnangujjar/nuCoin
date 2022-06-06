import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TextInput } from 'react-native'
import { styles } from './CoinAStyle'
import React from 'react'
import Header from '../../compnent/header/Header'
import block from '../../assets/images/Block2.png'


const CoinA = () => {
  return (
    <ScrollView>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <Header />
        <View>
          <Text>Set Password</Text>
          <Text>02.03</Text>
        </View>
        <View style={styles}>
          <Image source={block}/>
        </View>
      </View>
    </ScrollView>


  )
}

export default CoinA
