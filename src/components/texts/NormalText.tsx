import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');

type Props = {
    text: string;
}

const NormalText: React.FC<Props> = ({ text }: Props) => {
    return (
        <View>
            <Text style={styles.normaltext}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    normaltext: {
        color: 'black',
        fontSize: 18,
        letterSpacing: 1,
        fontWeight: '600',
        width: width - 10,
        marginLeft: 20,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 20,
        alignContent: 'flex-start',
        elevation: 1,
        fontFamily: 'Georgia'

    }
})
export default NormalText