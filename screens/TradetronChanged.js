import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default function TradetronChanged({ item, index }) {

    
    return (

        <View style={{ marginTop: responsiveHeight(2) }}>
            <Text style={styles.heading}>{index+1 + '.' + item.Detail}</Text>
            <View style={styles.listStyle}>

                <Text style={{color:'#000',fontWeight:'600'}}>{parseInt(item.QTY)}</Text>
                <Text style={{color:'#000',fontWeight:'600'}}>{parseInt(item.LTP)}</Text>
                <Text style={{color:'#000',fontWeight:'600'}}>{parseInt(item.Val)}</Text>
                <Text style={{color:item.PNL<0?'red':'green',fontWeight:'600'}}>{parseInt(item.PNL)}</Text>
            </View>
        </View>
    );

}
const styles=StyleSheet.create({
   heading: {
    textDecorationLine:'underline',
    fontWeight:'500',color:'#000'
},
    listStyle:{
        marginTop: responsiveHeight(1.3), 
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between' 
    }
})