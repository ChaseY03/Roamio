import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AccountScreen from './AccountScreen';

const HomeScreen = ({ navigation }) => {
    // Define navigation options (e.g., header title, options, etc.)
    // navigation.setOptions({
    //   title: 'Home',
    // });

    // Define a function to navigate to another screen
    const goToAccount = () => {
        navigation.navigate('Account'); // Assuming you have a screen named ProfileScreen
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Home screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default HomeScreen;