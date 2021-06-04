import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import {Picker} from '@react-native-community/picker'

export default function UnitsPicker({unitsSystem, setUnitsSystem}) {
    return (
        <View style={styles.unitsSystem}>
                <Picker selectedValue={unitsSystem} onValueChange={(item)=> setUnitsSystem(item)} mode="dropdown">
                    <Picker.Item label="C°" value="metric"/>
                    <Picker.Item label="F°" value="imperial"/>
                </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    unitsSystem: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                top:-20
            },
            android: {
                top:100
            }
        }),
        left: 30,
        height: 50,
        width:85
    }
})