import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const ProfileStatus = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Text style={styles.text1}>Muhammad{'\n'}Yaseen</Text>

                    <View style={styles.container3}>
                        <TouchableOpacity style={styles.button1}>
                            <Image source={require('../../assets/Icons/bell.png')} style={styles.imageIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button2}>
                            <Image source={require('../../assets/Icons/toggle.png')} style={styles.imageIcon2} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 150,
        borderRadius: 25,
        elevation: 5,
        marginTop: 20,
        marginBottom: 15,
        left: 10,
        right: 10,
        shadowColor: '#FF1493',
        backgroundColor: '#222E48'
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container3: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20
    },
    text1: {
        marginTop: 20,
        left: 20,
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '600'
    },
    button1: {
        marginTop: 20,
        width: '20%',
        height: '50%',
        borderRadius: 50,
        marginLeft: 10,
    },
    imageIcon: {
        width: '60%',
        height: '60%',
        borderRadius: 5,
        marginRight: 20,
    },
    button2: {
        marginTop: 20,
        width: '20%',
        height: '50%',
        borderRadius: 50,
        marginLeft: 10,
    },
    imageIcon2: {
        width: '60%',
        height: '60%',
        borderRadius: 5,
        marginRight: 10
    },
    filters: {
        marginTop: 10,
        marginBottom: 10,
    },
})

export default ProfileStatus