import { Text, TouchableOpacity, View } from "react-native"
import { Container } from "../../../../components/Container"
import styled from './styles'
import { useState } from "react"


interface ButtonSegmentedProps {
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const ButtonSegmented = ({selected, setSelected}: ButtonSegmentedProps) => {


    return(
            <View style={styled.cardContainer}>
                <View style={styled.buttonsContainer}>
                    <TouchableOpacity onPress={() => setSelected('members')} style={selected === 'members' ? styled.selected : null}>
                        <Text style={styled.button}>
                        Membros
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelected('family')} style={selected === 'family' ? styled.selected : null} >
                        <Text style={styled.button}>
                        Familia
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}