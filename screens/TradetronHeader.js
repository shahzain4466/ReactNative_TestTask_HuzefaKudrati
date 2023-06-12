import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

export default function TradetronHeader({ }) {


    return (
        <View style={styles.headerContainer }>

            <Text style={styles.headerTitle}> Stratergies </Text>

        </View>
    );

}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        height: responsiveHeight(7),
        alignItems: 'center',
      
    },
    headerTitle: {
        fontWeight: '700',
        fontSize: responsiveFontSize(2)
    }
})