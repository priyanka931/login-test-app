import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, Button, Modal, StyleSheet, Picker } from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'

const options=['ab', 'de', 'hgkj']

const DropDown = ({items}) => {
    let [ visible, setVisible ] = useState(false)
    const [selectedValue, setSelectedValue] = useState(items[0])

    // return (
    //     <View style={{backgroundColor: 'white'}}>
    //         {visible && <View style={{width: 60, height: 60, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
    //             <FlatList
    //                 data={items}
    //                 style={{
    //                     height: 60,
    //                     top: 20,
    //                     width: '100%'
    //                 }}
    //                 renderItem={({item}) => {
    //                     return (
    //                         <View style={{height: 20, borderWidth:1, width: '100%'}}>
    //                             <Text>{item}</Text>
    //                         </View>
    //                     )
    //                 }}
    //             /></View>}
    //         <View style={{flexDirection: 'row', position: 'relative'}}>
    //             <View style={{ width: '90%' }}>
    //                 <Text>Goal For Activation</Text>
    //                 <Text>- Choose Option -</Text>
    //             </View>
    //             <TouchableOpacity
    //                 onPress={() => setVisible(!visible)}
    //             >
    //                 <Image
    //                     source={require('../screens/eye.png')}
    //                     style={{width: 20, height: 15}}
    //                 />
    //             </TouchableOpacity>
    //         </View>
    //     </View>
    // )

    return (
        <ModalDropdown
            style={{flex: 1,
                top: 32,
                left: 8,}}
            options={options}
        />
    )
}

export default DropDown