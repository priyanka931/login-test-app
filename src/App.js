import React from 'react'
import { View } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'

import Screen from './screens/index.js'

const App = () => {
    return (
        <NavigationContainer>
            <Screen />
        </NavigationContainer>
    )
}

export default App