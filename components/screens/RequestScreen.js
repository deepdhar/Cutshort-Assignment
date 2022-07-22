import React from 'react';
import { 
    Image, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RequestScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            {/* Top view */}
            <View style={styles.top}>
                {/* back button view */}
                <TouchableOpacity onPress={() => navigation.goBack()}
                style={styles.backButtonView}>
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
                <Text style={styles.topText}>New Request</Text>
            </View>

            {/* Centre View */}
            <View style={styles.centreView}>
                {/* DP view */}
                <View style={styles.dpView}>
                    <View style={styles.circle1}>
                        <Image 
                            style={{
                                resizeMode: 'center',
                                height: '100%',
                                width: '100%',
                                borderRadius: 120
                            }}
                            source={require('../../assets/images/person4.png')}
                        />
                    </View>
                </View>

                {/* Name text */}
                <Text style={styles.name}>Adeleke Ramon</Text>

                {/* requesting for text */}
                <Text style={styles.requestingFor}>is requesting for:</Text>

                {/* Amount text */}
                <Text style={styles.amount}>₦ 200,000</Text>
            </View>

            {/* Button View */}
            <View style={styles.buttonView}>
                {/* Send Money button */}
                <TouchableOpacity style={styles.sendMoneyButton}>
                    <Text style={{color: 'white', fontFamily: 'Inter-Medium'}}>Send Money</Text>
                </TouchableOpacity>
                {/* Don't send button */}
                <TouchableOpacity style={styles.dontSendButton}>
                    <Text style={{color: '#464E8A', fontFamily: 'Inter-Medium'}}>Don't Send</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default RequestScreen

const styles = StyleSheet.create({
    amount: {
        color: 'white',
        fontFamily: 'Inter-SemiBold',
        fontSize: 35
    },
    backButtonView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        left: 15,
        top: 28
    },
    buttonView: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 60
    },
    centreView: {
        flex: 1,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle1: {
        borderRadius: 120,
        backgroundColor: '#172957',
        padding: 22
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#010A43'
    },
    dontSendButton: {
        borderColor: '#464E8A',
        borderWidth: 1,
        paddingVertical: 18,
        width: 160,
        alignItems: 'center',
        borderRadius: 8,
    },
    dpView: {
        height: 200,
        width: 200,
        borderRadius: 120,
        backgroundColor: '#14234B',
        padding: 22,
    },
    name: {
        color: 'white',
        fontFamily: 'Inter-Medium',
        fontSize: 20,
        marginVertical: 18
    },
    requestingFor: {
        color: 'white',
        fontSize: 13,
        marginBottom: 18,
        fontFamily: 'Inter-Regular'
    },
    sendMoneyButton: {
        backgroundColor: '#FF2E63',
        paddingVertical: 18,
        width: 160,
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 18
    },
    top: {
        width: '100%',
        paddingVertical: 25, 
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'center'
    },
    topText: {
        color: 'white',
        alignSelf: 'center',
        fontFamily: 'Inter-Regular',
        fontSize: 17
    }
})