import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import MyStack from './components/navigation';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <MyStack/>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#010A43'
    }
})