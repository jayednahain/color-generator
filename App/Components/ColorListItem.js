import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Utility } from '../Utility/Utility';


export default ColorListItem = ({ color, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ flexDirection: 'row', marginVertical: 5, borderColor: color, borderWidth: 0.9, borderRadius: 15 }}>
                <View style={{ height: 100, width: 100, backgroundColor: color, borderRadius: 15 }} />
                <View style={{ marginHorizontal: 10, marginVertical: 5, justifyContent: 'center' }}>
                    <Text>{color}</Text>
                    <Text>{Utility.generateHexColorFromRgb(color)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({})