// UpcomingWeather.js

import React from 'react'
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'
import { getWeatherCategory } from '../utilities/getWeatherCondition'

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item, index }) => {
    const dailyIndex = Math.floor(index / 24)
    return (
      <ListItem
        condition={getWeatherCategory(item)}
        dt_txt={weatherData.hourly.time[index]}
        min={weatherData.daily.temperature_2m_min[dailyIndex]}
        max={weatherData.daily.temperature_2m_max[dailyIndex]}
      />
    )
  }

  const { container, image } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={image}
      >
        <FlatList
          data={weatherData.hourly.weather_code}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item}-${index}`}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather
