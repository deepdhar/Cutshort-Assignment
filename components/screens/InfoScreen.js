import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const InfoScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image 
                style={{
                    resizeMode: 'stretch',
                    width: windowWidth,
                    height: '70%',
                }}
                source={require('../../assets/images/info_image.png')}
            />

            <View style={styles.bottom}>
                {/* Progress view group */}
                <View style={styles.progressViewGroup}>
                    <View style={{
                        width: 12, 
                        height: 6, 
                        backgroundColor: '#fdd590', 
                        borderRadius: 50, 
                        marginRight: 4
                    }}/>
                    <View style={{
                        width: 28, 
                        height: 6, 
                        backgroundColor: '#ffb129', 
                        borderRadius: 50, 
                        marginRight: 4
                    }}/>
                    <View style={{
                        width: 12, 
                        height: 6, 
                        backgroundColor: '#fdd590', 
                        borderRadius: 50, 
                    }}/>
                </View>
                
                {/* Texts */}
                <Text style={styles.text1}>Transfer That Is Safe</Text>
                <Text style={styles.text2}>You have nothing to be scared{'\n'}about, we got you covered.</Text>

                {/* Button View */}
                <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Start banking</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default InfoScreen

const styles = StyleSheet.create({
    bottom: {
        flexDirection: 'column',
        height: '30%',
        width: '82%',
        backgroundColor: '#17288E',
        borderTopRightRadius: 70,
        paddingHorizontal: 22,
        paddingTop: 25,
        paddingBottom: 15,
        marginTop: 10
    },
    button: {
        width: 140,
        height: 50,
        backgroundColor: 'white',
        position: 'absolute',
        left: 22,
        bottom: 28,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#1E2989',
        fontFamily: 'Inter-SemiBold',
        fontSize: 14,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#12184B'
    },
    progressViewGroup: {
        flexDirection: 'row',
        marginBottom: 18
    },
    text1: {
        fontSize: 19,
        color: 'white',
        fontFamily: 'Inter-SemiBold',
        marginBottom: 12
    },
    text2: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Inter-Regular'
    },
})