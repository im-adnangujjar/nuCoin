import { StyleSheet, Text, View ,ScrollView,SafeAreaView,Image } from 'react-native'
import React from 'react'
import {styles} from './DashBoardStyle'
import logo from '../../assets/images/walletlogo.png'
import image from '../../assets/images/person.png'
import icon1 from '../../assets/icons/Icon.png'
import sun  from '../../assets/icons/sunIcon.png'

const DashBoard = () => {
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
      <Image source={sun} />
</View>
        </ScrollView>
  )
}

export default DashBoard
