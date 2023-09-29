import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import COLORS from '../colors/colors';

type Props = {
    text: string;
}

const HeaderText: React.FC<Props> = ({ text }: Props) => {
    return (
        <View>
            <Text style={styles.headertext}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    headertext: {
        color: COLORS.white,
        fontSize: 22,
        letterSpacing: 1,
        fontWeight: '600',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    }
})
export default HeaderText