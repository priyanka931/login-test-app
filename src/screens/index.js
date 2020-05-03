import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import EmailScreen from './Email'
import PasswordScreen from './Password'
import InfoScreen from './Info'
import ScheduleScreen from './Schedule'

const Stack = createStackNavigator()

const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Email' component={EmailScreen} />
            <Stack.Screen name='Password' component={PasswordScreen} />
            <Stack.Screen name='Info' component={InfoScreen} />
            <Stack.Screen name='Schedule' component={ScheduleScreen} />
        </Stack.Navigator>
    )
}

export default Navigator