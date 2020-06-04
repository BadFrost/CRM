import * as React from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput, Image, StyleSheet, Modal, StatusBar } from 'react-native';
import Constants from "expo-constants";
import axios from 'axios';

export const Profile = ({ navigation }) => {
    const { manifest } = Constants;
    const [user, setUser] = React.useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        country: '',
        company: ''
    });
    let userInfo = () => {
        const uri = `${manifest.debuggerHost.split(':').shift()}`;
        axios.get(`http://${uri}:8080/getMe`)
        .then(async (res) => {
            console.log(res.data)
            if (res.data !== 'User not found!') {
                setUser({
                    fname: res.data.fname,
                    lname: res.data.lname,
                    email: res.data.email,
                    phone: res.data.phone,
                    country: res.data.country,
                    company: res.data.company
                });
            }
            else {
                navigation.navigate('Login')
            }
        })
        .catch(async (err) => {
            console.log(err)
        });
    };
    userInfo();
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.logOut}>
                    <Image source={require('../assets/icons/logOut.png')} />
                </TouchableOpacity>
                <Text style={styles.name}>{user.fname} {user.lname}</Text>
            </ScrollView>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#191919" translucent = {true}/>
            <View style={styles.header}>
                <Text style={styles.title}>Profile</Text>
            </View>
            <View style={styles.menuContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.dashboard}>
                    <Image source={require('../assets/icons/dashboardInactive.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.statistics}>
                    <Image source={require('../assets/icons/statisticsInactive.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.messages}>
                    <Image source={require('../assets/icons/messagesInactive.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.results}>
                    <Image source={require('../assets/icons/resultsInactive.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.profile}>
                    <Image source={require('../assets/icons/profileActive.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    scrollViewContainer: {
        height: '195%',
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        position: 'absolute',
        backgroundColor: '#191919',
        width: '100%',
        height: 85,
        top: 0
    },
    title: {
        position: 'absolute',
        top: 53,
        width: 85,
        height: 22,
        left: '45%',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 22,
        color: '#FFFFFF'
    },
    logOut: {
        position: 'absolute',
        right: 30,
        top: 114
    },
    menuContainer: {
        position: 'absolute',
        backgroundColor: '#191919',
        top: 771,
        height: 80,
        width: '100%'
    },
    dashboard: {
        position: 'absolute',
        left: '7%',
        top: 20
    },
    statistics: {
        position: 'absolute',
        left: '27%',
        top: 20
    },
    messages: {
        position: 'absolute',
        left: '47%',
        top: 20
    },
    results: {
        position: 'absolute',
        left: '67%',
        top: 20
    },
    profile: {
        position: 'absolute',
        left: '87%',
        top: 20
    },
    name: {
        position: "absolute",
        top: 105,
        left: '10%',
        width: '70%',
        height: 33,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 33,
        color: 'rgba(255, 255, 255, 0.7)'
    }
});