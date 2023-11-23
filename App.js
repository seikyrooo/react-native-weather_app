import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'

const App = () => {
  const [loading, setLoading] = useState(true)
  
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}

export default App
