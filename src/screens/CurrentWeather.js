import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'
import { getWeatherCategory } from '../utilities/getWeatherCondition'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyle,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    descrpition,
    message
  } = styles

  const weatherCondition = getWeatherCategory(weatherData?.current.weather_code)
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={tempStyle}>{`${weatherData.current.temperature_2m}°`}</Text>
        <Text style={feels}>{`Feels like ${weatherData.current.apparent_temperature}°`}</Text>
        <RowText
          messageOne={`High: ${weatherData.daily.temperature_2m_max[0]}° `}
          messageTwo={`Low: ${weatherData.daily.temperature_2m_min[0]}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={`It's ${weatherCondition}`}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={descrpition}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyle: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 20
  },
  descrpition: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  }
})
export default CurrentWeather
