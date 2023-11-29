export const getWeatherCategory = (weatherCode) => {
  switch (weatherCode) {
    case 0:
      return 'Clear'
    case 1:
    case 2:
    case 3:
      return 'Clouds'
    case 45:
    case 48:
      return 'Haze'
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return 'Drizzle'
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return 'Rain'
    case 71:
    case 73:
    case 75:
    case 77:
      return 'Snow'
    case 80:
    case 81:
    case 82:
      return 'Rain'
    case 85:
    case 86:
      return 'Snow'
    case 95:
    case 96:
    case 99:
      return 'ThunderStorm'
    default:
      return 'Unknown'
  }
}
