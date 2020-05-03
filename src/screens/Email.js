import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const Email = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: '#f0f0f0', padding: 15}}>
           <Text>Welcome to Gin Finans</Text>
           <Text>Welcome to The Bank of The Future.</Text> 
           <Text>Mangae and track your accounts on the go.</Text>
           <TextInput
                style={{ height: 50, borderRadius: 8, borderWidth: 10, borderColor: 'white' }}
                placeholder={'Email'}
           />
           <Button
                title={'Next'}
                onPress={() => navigation.navigate('Password')}
           />
        </View>
    )
}

export default Email