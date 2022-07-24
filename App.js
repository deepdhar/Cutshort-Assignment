import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import MyStack from './components/navigation';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#010A43"/>
            <MyStack />
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