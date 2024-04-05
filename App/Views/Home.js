import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ColorListItem from '../Components/ColorListItem';
import { Utility } from '../Utility/Utility';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


export default function Home() {
    const navigation = useNavigation();
    const [colors, setColors] = useState([]);

    const onPressAddColorButton = () => {
        setColors([...colors, Utility.generateRandomRGB()]);
    };

    const renderFlatListItem = (item) => {
        return (
            <ColorListItem color={item} onPress={() => onPressColor(item)} />
        );
    };

    const onPressColor = (item) => {
        navigation.navigate('ColorDetails', { color: item });
    };

    return (
        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
            <Button title='Add color' onPress={onPressAddColorButton} />
            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({ item }) => {
                    return renderFlatListItem(item);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({})