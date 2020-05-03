import React from 'react'
import { View, Text } from 'react-native'

const Character = ({ enable, title, subTitle }) => {
    return (
        <View style={{alignItems: 'center'}}>
            {!enable ?
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 22, marginBottom: 5}}>{title}</Text> :
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 22, marginBottom: 5}}>{title}</Text>
            }
            <Text style={{color: 'white'}}>{subTitle}</Text>
        </View>
    )
}

export default Character