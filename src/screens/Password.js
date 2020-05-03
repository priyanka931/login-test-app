import React, { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, Button } from 'react-native'

import Character from '../components/Character'

const Password = ({ navigation }) => {
    let [ lower, setLower ] = useState(false)
    let [ upper, setUpper ] = useState(false)
    let [ number, setNumber ] = useState(false)
    let [ length, setLength ] = useState(false)
    let [ complexity, setComplexity ] = useState('')
    let [ visible, setVisible ] = useState(true)

    const onChangeText = text => {
        if (!number && text.match(/[0-9]/g)) setNumber(true)
        if (!lower && text.match(/[a-z]/g)) setLower(true)
        if (!upper && text.match(/[A-Z]/g)) setUpper(true)
        if (!length && text.length > 9) setLength(true)
        if (!number || !lower || !upper || !length) setComplexity('very Weak')
        if (number && lower && upper && text.length > 9) setComplexity('Strong')
    }

    return (
        <View style={{flex: 1, padding: 15, backgroundColor: '#6694ff'}}>
            <View style={{flex: 1, justifyContent:'center'}}>
                <Text style={{ color: 'white', marginBottom: 10, fontWeight: 'bold'  }}>Create Password</Text>
                <Text style={{ color: 'white' }}>Password will be used to login to account</Text>
            </View>
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        style={{ height: 50, backgroundColor: 'white', borderRadius: 8, marginBottom: 20, width: '100%' }}
                        secureTextEntry={visible}
                        onChangeText={onChangeText}
                        placeholder={'value'}
                    />
                    <TouchableOpacity
                        style={{height: 50, justifyContent: 'center'}}
                        onPress={() => setVisible(!visible)}
                    >
                        <Image
                            source={require('./eye.png')}
                            style={{width: 20, height: 10}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{ color: 'white', marginRight: 10 }}>Complexity:</Text>
                    <Text style={{ color: 'white' }}>{complexity}</Text>
                </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Character enable={lower} title={'a'} subTitle={'LowerCase'} />
                <Character enable={upper} title={'A'} subTitle={'UpperCase'} />
                <Character enable={number} title={'123'} subTitle={'Number'} />
                <Character enable={length} title={'9+'} subTitle={'Characters'} />
            </View>
            <Button
                title={'Next'}
                onPress={() => navigation.navigate('Info')}
           />
        </View>
    )
}

export default Password