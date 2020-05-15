import * as React from 'react';
import { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, AsyncStorage, Header } from 'react-native';

export function Dashboard({ navigation }) {
    let num = new Date().getMonth();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
    const [month, setMonth] = useState({ selectedMonth: months[num] })

    let previousWeek = async () => {
        
    };

    let nextWeek = async () => {

    };

    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.notes}>
                    <Image source={require('../assets/icons/notes.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Dashboard</Text>
                <TouchableOpacity style={styles.editTasks}>
                    <Image source={require('../assets/icons/editTasks.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.calendarBlock}>
                <View style={styles.monthHeader}>
                    <TouchableOpacity style={styles.leftArrowTouch}>
                        <Image style={styles.leftArrow} source={require('../assets/icons/left-arrow.png')} />
                    </TouchableOpacity>
                    <Text style={styles.monthTextHeader}>{month.selectedMonth}</Text>
                    <TouchableOpacity style={styles.rightArrowTouch}>
                        <Image style={styles.rightArrow} source={require('../assets/icons/right-arrow.png')} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.moText}>{weekDays[0]}</Text>
                <Text style={styles.tuText}>{weekDays[1]}</Text>
                <Text style={styles.weText}>{weekDays[2]}</Text>
                <Text style={styles.thText}>{weekDays[3]}</Text>
                <Text style={styles.frText}>{weekDays[4]}</Text>
                <Text style={styles.saText}>{weekDays[5]}</Text>
                <Text style={styles.suText}>{weekDays[6]}</Text>
            </View>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        position: 'absolute',
        backgroundColor: '#191919',
        width: 395,
        height: 85,
        top: 0
    },
    title: {
        position: 'absolute',
        top: 53,
        width: 85,
        height: 22,
        left: 158,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 22,
        color: '#FFFFFF'
    },
    notes: {
        position: 'absolute',
        left: 18,
        top: 39
    },
    editTasks: {
        position: 'absolute',
        right: 18,
        top: 39
    },
    calendarBlock: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        width: '95%',
        height: 156,
        top: 115,
        borderRadius: 10
    },
    monthHeader: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        width: '100%',
        height: 39.6,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    monthTextHeader: {
        position: 'absolute',
        width: 84.41,
        height: 25.2,
        left: '45%',
        right: '45%',
        top: 8,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 22,
        color: '#FFFFFF',
        opacity: 0.8
    },
    leftArrow: {
        tintColor: '#FFFFFF',
        width: 18,
        height: 18
    },
    leftArrowTouch: {
        position: 'absolute',
        width: 18,
        height: 18,
        left: '5%',
        top: 11
    },
    rightArrow: {
        tintColor: '#FFFFFF',
        width: 18,
        height: 18
    },
    rightArrowTouch: {
        position: 'absolute',
        width: 18,
        height: 18,
        right: '5%',
        top: 11
    },
    moText: {
        position: 'absolute',
        width: 84.41,
        height: 25.2,
        left: '2%',
        top: 54,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 24,
        color: '#FFFFFF',
        opacity: 0.7
    },
    tuText: {
        position: 'absolute',
        width: 84.41,
        height: 25.2,
        left: 60,
        top: 54,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 24,
        color: '#FFFFFF',
        opacity: 0.7
    },
    weText: {
        position: 'absolute',
        width: 84.41,
        height: 25.2,
        left: 111,
        top: 54,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 24,
        color: '#FFFFFF',
        opacity: 0.7
    },
    thText: {
        position: 'absolute',
        width: 84.41,
        height: 25.2,
        left: 162,
        top: 54,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 24,
        color: '#FFFFFF',
        opacity: 0.7
    },
    frText: {
        position: 'absolute',
        width: 84.41,
        height: 25.2,
        left: '60%',
        top: 54,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 24,
        color: '#FFFFFF',
        opacity: 0.7
    },
    saText: {
        position: 'absolute',
        width: 84.41,
        height: 25.2,
        left: '74%',
        top: 54,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 24,
        color: '#FFFFFF',
        opacity: 0.7
    },
    suText: {
        position: 'absolute',
        width: 84.41,
        height: 25.2,
        left: '91%',
        top: 54,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 24,
        color: '#FFFFFF',
        opacity: 0.7
    },
  });