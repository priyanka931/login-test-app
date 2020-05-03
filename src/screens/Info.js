import React from 'react'
import { View } from 'react-native'
import DropDown from '../components/Dropdown'

const Info = ({navigation}) => {
    return (
        <View style={{flex: 1, padding: 15, backgroundColor: '#6694ff', alignItems:'center'}}>
            <DropDown
                items={['Goal', 'for', 'activation']}
            />
            <DropDown
                items={['Monthly', 'income']}
            />
            <DropDown
                items={['Monthly', 'expense']}
            />
            
        </View>
    )
}

export default Info