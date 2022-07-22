import React from 'react';
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View,
    Image,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            {/* Top View */}
            <View style={styles.top}>
                <View style={styles.leftView}>
                {/* menu */}
                    <TouchableOpacity style={styles.menuButton}>
                        <Image
                            source={require('../../assets/images/menu.png')}
                            style={{height: '100%', width: '100%', resizeMode:'contain'}}
                        />
                    </TouchableOpacity>

                    {/* Header Text */}
                    <Text style={styles.headerText}>Hello Sandra,</Text>
                </View>

                {/* add money button */}
                <TouchableOpacity style={styles.addMoneyButton}>
                    <Text style={styles.addMoneyText}>Add money</Text>
                </TouchableOpacity>
            </View>

            {/* Mid View */}
            <View style={styles.mid}>
                <Text style={{
                    color: 'white',
                    fontSize: 12.5,
                    fontFamily: 'Inter-Regular'
                }}>Your current balance is</Text>
                <Text style={{
                    color: 'white',
                    fontFamily: 'Inter-SemiBold',
                    fontSize: 35,
                    marginTop: 8
                }}>₦ 200,000</Text>

                {/* Button View */}
                <View style={styles.buttonView}>

                    {/* request money button */}
                    <TouchableOpacity onPress={() => navigation.navigate('RequestScreen')}
                    style={[styles.button,{marginRight: 5}]}>
                        <Text style={styles.buttonText}>Request money</Text>
                    </TouchableOpacity>

                    {/* send money button */}
                    <TouchableOpacity onPress={() => navigation.navigate('SendMoneyScreen')}
                    style={[styles.button,{marginLeft: 5}]}>
                        <Text style={styles.buttonText}>Send money</Text>
                    </TouchableOpacity>

                </View>
            </View>

            {/* Bottom Card */}
            <View style={styles.bottomCard}>
                {/* Pill */}
                <View style={styles.pill}/>

                {/* Texts */}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 18 ,marginTop: 15, marginBottom: 30, alignItems: 'center',}}>
                    <Text style={{color: 'white'}}>All Transactions</Text>
                    <View style={{flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            source={require('../../assets/images/back_bn.png')}
                            style={{
                                width: 12,
                                height: 12,
                                transform: [{rotate: '-90deg'}],
                                marginLeft: 8,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{color: 'white', fontSize: 13}}>Recent</Text>
                        <Text style={{color: '#4E589F', marginRight: 8, fontSize: 13}}>Sort by:</Text>
                    </View>
                </View>

                {/* List */}
                <ScrollView 
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                >

                    {/* Item 1*/}
                    <View style={[styles.item, {backgroundColor: '#192259'}]}>
                        <Image
                            source={require('../../assets/images/person3.png')}
                            style={styles.itemImage}
                        />

                        {/* Vertical View */}
                        <View style={{marginLeft: 15, justifyContent: 'center', flex: 1}}>
                            {/* Name */}
                            <Text style={styles.itemName}>Adeboye Usman</Text>
                            {/* Button View */}
                            <View style={styles.itemButtonReceived}>
                                <Image
                                    source={require('../../assets/images/received.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        resizeMode: 'contain',
                                        marginRight: 2
                                    }}
                                />
                                <Text style={{fontFamily: 'Inter-Regular', color: 'white', fontSize: 12}}>Recieved</Text>
                            </View>
                        </View>

                        <Text style={{fontFamily: 'Inter-SemiBold', color: '#1DC7AC'}}>₦ 200,000</Text>
                    </View>

                    {/* Item 2*/}
                    <View style={[styles.item, {backgroundColor: '#10194E'}]}>
                        <Image
                            source={require('../../assets/images/person5.png')}
                            style={styles.itemImage}
                        />

                        {/* Vertical View */}
                        <View style={{marginLeft: 15, justifyContent: 'center', flex: 1}}>
                            {/* Name */}
                            <Text style={styles.itemName}>Mercy Popoola</Text>
                            {/* Button View */}
                            <View style={styles.itemButtonFailed}>
                                <Image
                                    source={require('../../assets/images/failed.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        resizeMode: 'contain',
                                        marginRight: 2
                                    }}
                                />
                                <Text style={{fontFamily: 'Inter-Regular', color: 'white', fontSize: 12}}>Failed</Text>
                            </View>
                        </View>

                        <Text style={{fontFamily: 'Inter-SemiBold', color: '#FE4A54'}}>₦ 110,000</Text>
                    </View>

                    {/* Item 3 */}
                    <View style={[styles.item, {backgroundColor: '#192259'}]}>
                        <Image
                            source={require('../../assets/images/person6.png')}
                            style={styles.itemImage}
                        />

                        {/* Vertical View */}
                        <View style={{marginLeft: 15, justifyContent: 'center', flex: 1}}>
                            {/* Name */}
                            <Text style={styles.itemName}>Onome Adetayo</Text>
                            {/* Button View */}
                            <View style={styles.itemButtonSent}>
                                <Image
                                    source={require('../../assets/images/sent.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        resizeMode: 'contain',
                                        marginRight: 2
                                    }}
                                />
                                <Text style={{fontFamily: 'Inter-Regular', color: 'white', fontSize: 12}}>Sent</Text>
                            </View>
                        </View>

                        <Text style={{fontFamily: 'Inter-SemiBold', color: '#FAAD39'}}>₦ 10,000</Text>
                    </View>

                    {/* Item 4*/}
                    <View style={[styles.item, {backgroundColor: '#10194E'}]}>
                        <Image
                            source={require('../../assets/images/person.png')}
                            style={styles.itemImage}
                        />

                        {/* Vertical View */}
                        <View style={{marginLeft: 15, justifyContent: 'center', flex: 1}}>
                            {/* Name */}
                            <Text style={styles.itemName}>Kingsley Abiodun</Text>
                            {/* Button View */}
                            <View style={styles.itemButtonReceived}>
                                <Image
                                    source={require('../../assets/images/received.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        resizeMode: 'contain',
                                        marginRight: 2
                                    }}
                                />
                                <Text style={{fontFamily: 'Inter-Regular', color: 'white', fontSize: 12}}>Received</Text>
                            </View>
                        </View>

                        <Text style={{fontFamily: 'Inter-SemiBold', color: '#1DC7AC'}}>₦ 200,000</Text>
                    </View>

                    {/* Item 5 */}
                    <View style={[styles.item, {backgroundColor: '#192259'}]}>
                        <Image
                            source={require('../../assets/images/person4.png')}
                            style={styles.itemImage}
                        />

                        {/* Vertical View */}
                        <View style={{marginLeft: 15, justifyContent: 'center', flex: 1}}>
                            {/* Name */}
                            <Text style={styles.itemName}>Adelake Ramon</Text>
                            {/* Button View */}
                            <View style={styles.itemButtonSent}>
                                <Image
                                    source={require('../../assets/images/sent.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        resizeMode: 'contain',
                                        marginRight: 2
                                    }}
                                />
                                <Text style={{fontFamily: 'Inter-Regular', color: 'white', fontSize: 12}}>Sent</Text>
                            </View>
                        </View>

                        <Text style={{fontFamily: 'Inter-SemiBold', color: '#FAAD39'}}>₦ 50,000</Text>
                    </View>

                </ScrollView>
            </View>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    addMoneyButton: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#212A6B',
        borderRadius: 10,
    },
    addMoneyText: {
        color: '#426DDC',
        fontSize: 13,
        fontFamily: 'Inter-Medium'
    },
    bottomCard: {
        flex: 1,
        flexDirection: 'column',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#10194E',
        paddingTop: 18,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 18,
        borderWidth: 1,
        borderColor: '#464E8A',
        borderRadius: 10
    },
    buttonText: {
        color: '#464E8A',
        fontFamily: 'Inter-Regular',
        fontSize: 14
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 30,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#010A43'
    },
    headerText: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        marginLeft: 12,
        fontSize: 18,
        fontFamily: 'Inter-Medium'
    },
    item: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 18,
        alignItems: 'center',
    },
    itemButtonReceived: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 4,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        width: 90, 
        backgroundColor: '#1DC7AC'
    },
    itemButtonFailed: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 4,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        width: 72, 
        backgroundColor: '#FE4A54'
    },
    itemButtonSent: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 4,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        width: 63, 
        backgroundColor: '#FAAD39'
    },
    itemImage: {
        width: 50,
        height: 50,
        borderRadius: 360,
        resizeMode: 'contain'
    },
    itemName: {
        fontFamily: 'Inter-SemiBold',
        color: '#858EC5',
        fontSize: 16
    },
    leftView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuButton: {
        width: 40,
        height: 40,
        borderRadius: 360,
        backgroundColor: '#2D116B',
        padding: 8
    },
    mid: {
        paddingHorizontal: 15,
        paddingVertical: 18
    },
    pill: {
        width: 60,
        height: 7,
        backgroundColor: '#4E589F',
        borderRadius: 20,
        alignSelf: 'center'
    },
    top: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 25,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    }
})