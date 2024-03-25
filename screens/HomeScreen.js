import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import { GOOGLE_MAPS_API_KEY, MAPS_URL } from '@env';

//console.log(GOOGLE_MAPS_API_KEY);
//console.log(MAPS_URL);
import AccountScreen from './AccountScreen';


const HomeScreen = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                //setErrorMsg('Permission to access location was denied');
                // If permission is denied, set a default location (e.g., City University of London)
                setLocation({
                    coords: {
                        latitude: 51.5280,
                        longitude: -0.1025,
                    },
                });
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    return (
        <View style={styles.container}>
            {location ? (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.002, //Zoom levels
                        longitudeDelta: 0.002,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title="Current location"
                    />
                </MapView>
            ) : (
                <Text>Loading...</Text>
            )}
            {errorMsg && <Text>{errorMsg}</Text>}
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
    map: {
        width: '100%',
        height: '100%',
    },
});

export default HomeScreen;

/*
* <View style={styles.container}>
            <Text style={styles.heading}>Home screen</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 51.5280,
                    longitude: -0.1025,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker
                    coordinate={{ latitude: 51.5280, longitude: -0.1025 }}
                    title="City University of London"
                    description="United Kingdom"
                />
            </MapView>
            * */