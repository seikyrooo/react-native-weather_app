import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = () => {
    const {
        wrapper,
        container,
        temp,
        feels,
        highLowWrapper,
        highLow,
        bodyWrapper,
        descrpition,
        message,
    } = styles
    return (
        <SafeAreaView style={wrapper}>
            <View style={container}>
                <Feather name="sun" size={100} color="black" />
                <Text style={temp}>6</Text>
                <Text style={feels}>Feels like 5</Text>
                <RowText
                    messageOne={'High: 8'}
                    messageTwo={'Low: 6'}
                    containerStyles={highLowWrapper}
                    messageOneStyles={highLow}
                    messageTwoStyles={highLow}
                />
            </View>
            <RowText
                messageOne={'ThunderStrom'}
                messageTwo={weatherType['ThunderStrom'].message}
                containerStyles={bodyWrapper}
                messageOneStyles={descrpition}
                messageTwoStyles={message}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'pink',
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    temp: {
        color: 'black',
        fontSize: 48,
    },
    feels: {
        fontSize: 30,
        color: 'black',
    },
    highLow: {
        color: 'black',
        fontSize: 20,
    },
    highLowWrapper: {
        flexDirection: 'row',
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 20,
    },
    descrpition: {
        fontSize: 42,
    },
    message: {
        fontSize: 26,
    },
})
export default CurrentWeather
