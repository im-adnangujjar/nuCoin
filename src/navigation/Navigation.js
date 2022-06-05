import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/saplashScreen/SaplashScreen';
import LogIn from '../screens/logInPage/LogIn'
import SignUp from '../screens/signInPage/SignUp';
import SignUp1 from '../screens/signInPage/SignUp1';
import Wallet from '../screens/wallet/Wallet';
import Wallet3 from '../screens/wallet/Wallet3';
import LastWallet from '../screens/wallet/LastWallet.js';
import DashBoard from '../screens/dashboard/DashBoard';
import CardA from '../compnent/card/CardA';



const Stack = createNativeStackNavigator();


function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {/* <Stack.Screen name="CardA" component={CardA} /> */}

                <Stack.Screen name="SplashScreen" component={Home} />
                <Stack.Screen name="RaceDetail" component={LogIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignUp1" component={SignUp1} />
                <Stack.Screen name="Wallet" component={Wallet} />
                <Stack.Screen name="Wallet3" component={Wallet3} />
                <Stack.Screen name="LastWallet" component={LastWallet} />
                <Stack.Screen name="DashBoard" component={DashBoard} /> 

            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;



