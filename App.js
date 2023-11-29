import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { useGetWeatherGeo } from './src/hooks/useGetWeatherGeo'
import ErrorItem from './src/components/ErrorItem'

const App = () => {
  const [loading, error, weather, geocoding] = useGetWeatherGeo()

  if (weather.current && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} geocoding={geocoding} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})
export default App
