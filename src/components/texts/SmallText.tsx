import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');

type Props = {
    text: string;
}

const SmallText: React.FC<Props> = ({ text }: Props) => {
    return (
        <View>
            <Text style={styles.smalltext}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    smalltext: {
        color: 'red',
        fontSize: 15,
        letterSpacing: 1,
        fontWeight: '600',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: width - 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
        marginBottom: 5,
        alignContent: 'flex-start',
        elevation: 1,
        fontFamily: 'Georgia'


    }
})
export default SmallText