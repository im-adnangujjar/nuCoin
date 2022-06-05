import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    bgColor: {
        width: 375,
        height: 209,
        borderRadius: 10,
        paddingTop: 18,
        paddingLeft: 33,
        paddingRight: 26,
        color: 'white'
    },
    title_flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
    name: {
        // font-family: Poppins;
        fontSize: 14,
        fontWeight: '500',
        color: 'white'
    },
    title: {
        fontSize: 12,
        fontWeight: '500',
        color: 'white'
    },
    title1: {
        fontSize: 12,
        fontWeight: '400',
        color: 'white',
        marginTop: 13,
        marginBottom: 5
    },
    image_flex: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    coin: {
        // font-family: Poppins;
        fontSize: 26,
        fontWeight: '700',
        color: 'white',
        marginLeft: 10
    },
    image: {
        tintColor: 'white',
        marginLeft: 5
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10
    },
    icon_flex:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:27,
    }
})
