import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Header as HeaderRNE, Icon } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Header = ({navigation}) => {
    const addNewHabbit = () => {
        // Function logic for adding a new habit
    };

    return (
        <HeaderRNE
            leftComponent={
                <View style={styles.headerLeft}>
                    <TouchableOpacity style={{ marginLeft: 3 }} onPress={() => navigation.navigate('settings')}>
                        <Icon type="antdesign" size={26} name="setting" color="white" />
                    </TouchableOpacity>
                </View>
            }
            rightComponent={
                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={() => navigation.navigate('addtask')}>
                        <Icon type="antdesign" size={25} name="plus" color="white" />
                    </TouchableOpacity>
                </View>
            }
            centerComponent={CenterComponent}
            ViewComponent={LinearGradient} // Required for gradient
            linearGradientProps={{
                colors: ['#7fcbfd', '#3c95d0'],
                start: { x: 0.2, y: 0.5 },
                end: { x: 1, y: 0.5 },
            }}
        />
    )
}

const CenterComponent = () => (
    <Title>Habitty</Title>
)

const styles = StyleSheet.create({
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heading: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: "center",
        justifyContent: 'center'
    },
});

const Title = styled.Text`
        min-height: 29px;
        line-height:29px;
        color: white;
        font-size: 18px;
        font-weight: bold;
        align-items: center;
        justify-content: center;
`


