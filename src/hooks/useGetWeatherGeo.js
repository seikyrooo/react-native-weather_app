import { useState, useEffect } from 'react'
import * as Location from 'expo-location'

export const useGetWeatherGeo = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState({})
  const [geocoding, setGeocoding] = useState({})
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,weather_code&hourly=weather_code&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`
      )
      const data = await res.json()
      setWeather(data)
      setGeocodingData(data.timezone) // Memperbarui geocodingData dengan informasi zona waktu
      setLoading(false)
    } catch (e) {
      setError('Could not fetch weather')
    } finally {
      setLoading(false)
    }
  }

  const setGeocodingData = async (timezone) => {
    try {
      const parts = timezone.split('/')
      if (parts.length > 1) {
        const city = parts[1]
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
        )
        const data = await response.json()
        setGeocoding(data)
      } else {
        console.log('Tidak ada karakter / dalam string.')
      }
    } catch (error) {
      setError('Could not fetch Geocoding data')
    }
  }

  useEffect(() => {
    if (lat && lon) {
      fetchWeatherData()
    }
  }, [lat, lon])

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync()
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
    })()
  }, [])

  return [loading, error, weather, geocoding]
}
