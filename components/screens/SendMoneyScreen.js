import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TouchableOpacity, 
    TextInput,
    Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SendMoneyScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            {/* Top view */}
            <View style={styles.top}>
                {/* back button view */}
                <TouchableOpacity onPress={() => navigation.goBack()}
                style={styles.backButton}>
                    <Image 
                        source={require('../../assets/images/back_bn.png')}
                        style={{
                            width: 20,
                            height: 20,
                            resizeMode: 'center'
                        }}
                    />
                    <Text style={{color: 'white', fontFamily: 'Inter-Regular', fontSize: 13, marginStart: 3}}>Back</Text>
                </TouchableOpacity>
                <View style={styles.searchBar}>
                    <TextInput 
                        style={{color: 'white', paddingLeft: 12, width: '80%', fontSize: 15}}
                        numberOfLines={1}
                        placeholder="Search"
                        placeholderTextColor={'gray'}
                    />
                </View>
            </View>

            {/* Background view */}
            <View style={styles.backgroundView}>
                <View style={[styles.circle, {padding: 45}]}>
                    <View style={[styles.circleInner, {padding: 45}]}>
                        <View style={[styles.circleInner]}></View>
                    </View>
                </View>
            </View>


            {/* Scattered contacts */}
            <View style={{position: 'absolute', marginTop: 100, marginHorizontal: 18, left: 0, right: 0}}>

                {/* item 1 */}
                <View style={[styles.contact, {position: 'absolute', top: 75, left: 20}]}>
                    <View style={styles.circleSmall}>
                        <Image
                            style={{
                                resizeMode: 'contain',
                                width: '100%',
                                height: '100%',
                                borderRadius: 360,
                            }}
                            source={require('../../assets/images/person3.png')}
                        />
                    </View>
                    <Text style={{color: 'white', fontSize: 10}}>Adelaide Uti {'(son)'}</Text>
                </View>

                {/* item 2 */}
                <View style={[styles.contact, {position: 'absolute', left: 130, top: 15}]}>
                    <View style={styles.circleSmall}>
                        <Image
                            style={{
                                resizeMode: 'contain',
                                width: '100%',
                                height: '100%',
                                borderRadius: 360,
                            }}
                            source={require('../../assets/images/person2.png')}
                        />
                    </View>
                    <Text style={{color: 'white', fontSize: 10}}>Adedoyin Leke</Text>
                </View>

                {/* item 3 */}
                <View style={[styles.contact, {position: 'absolute', left: 50, top: 190}]}>
                    <View style={styles.circleSmall}>
                        <Image
                            style={{
                                resizeMode: 'contain',
                                width: '100%',
                                height: '100%',
                                borderRadius: 360,
                            }}
                            source={require('../../assets/images/person.png')}
                        />
                    </View>
                    <Text style={{color: 'white', fontSize: 10}}>Adolph Colleague</Text>
                </View>

                {/* item 4 - bigger */}
                <View style={[styles.contact, {position: 'absolute', right: 40, top: 110}]}>
                    <View style={[styles.circleSmall, {width: 75, height: 75, backgroundColor: '#1DC76B', padding: 3}]}>
                        <Image
                            style={{
                                resizeMode: 'contain',
                                width: '100%',
                                height: '100%',
                                borderRadius: 360,
                            }}
                            source={require('../../assets/images/person4.png')}
                        />
                    </View>
                    <Text style={{color: '#1DC76B', fontSize: 11}}>Adeleke Adeyanju</Text>
                </View>

                {/* item 5 */}
                <View style={[styles.contact, {position: 'absolute', right: 130, top: 285}]}>
                    <View style={styles.circleSmall}>
                        <Image
                            style={{
                                resizeMode: 'contain',
                                width: '100%',
                                height: '100%',
                                borderRadius: 360,
                            }}
                            source={require('../../assets/images/person5.png')}
                        />
                    </View>
                    <Text style={{color: 'white', fontSize: 10}}>Aduni Wale</Text>
                </View>

                {/* item 6 */}
                <View style={[styles.contact, {position: 'absolute', right: 15, top: 230}]}>
                    <View style={styles.circleSmall}>
                        <Image
                            style={{
                                resizeMode: 'contain',
                                width: '100%',
                                height: '100%',
                                borderRadius: 360,
                            }}
                            source={require('../../assets/images/person6.png')}
                        />
                    </View>
                    <Text style={{color: 'white', fontSize: 10}}>Adedoyin Leke</Text>
                </View>

            </View>


            {/* Bottom View */}
            <View style={styles.bottomCard}>
                <View style={styles.pill}/>

                {/* Image */}
                <Image
                    style={styles.image}
                    source={require('../../assets/images/person4.png')}
                />

                <Text style={styles.bottomText1}>Adeleke Adeyanju</Text>
                <Text style={styles.bottomText2}>{'(+'}234{')'} 905 1694 275</Text>

                {/* Button */}
                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default SendMoneyScreen

const styles = StyleSheet.create({
    backButton: {
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 18
    },
    backgroundView: {
        justifyContent: 'center'
    },
    bottomCard: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'column',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#10194E',
        padding: 18,
        alignItems: 'center',
    },
    bottomText1: {
        color: 'white',
        fontFamily: 'Inter-Medium',
        fontSize: 18,
        marginBottom: 12
    },
    bottomText2: {
        color: 'white',
        fontFamily: 'Inter-Regular',
        fontSize: 12,
        marginBottom: 18
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Inter-Medium',
        fontSize: 14
    },
    circle: {
        width: windowWidth,
        height: windowWidth,
        borderRadius: 360,
        borderWidth: 0.8,
        borderColor: '#172957'
    },
    circleInner: {
        width: '100%',
        height: '100%',
        borderRadius: 360,
        borderWidth: 0.8,
        borderColor: '#172957'
    },
    circleSmall: {
        width: 40,
        height: 40,
        borderRadius: 360,
        backgroundColor: 'white',
        padding: 2,
        marginBottom: 2
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#010A43'
    },
    contact: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    continueButton: {
        width: 150,
        paddingVertical: 18,
        backgroundColor: '#FF2E63',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 10,
    },
    image: {
        resizeMode: 'contain',
        width: 80,
        height: 80,
        borderRadius: 360,
        marginTop: 20,
        marginBottom: 12
    },
    pill: {
        width: 60,
        height: 7,
        backgroundColor: '#4E589F',
        borderRadius: 20
    },
    searchBar: {
        flexDirection: 'row',
        paddingHorizontal: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#1DC76B',
        backgroundColor: '#1B2B52',
        alignItems: 'center',
        marginRight: 5
    },
    top: {
        width: '100%',
        paddingVertical: 25, 
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    topText: {
        color: 'white',
        fontFamily: 'Inter-Regular',
        fontSize: 15,
    }
})