import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import TradetronChanged from './TradetronChanged';

const CollapsibleView = ({ Detail, UpdateRecord }) => {
    const { Title, Sub_title, Sub_total, TradeValues } = Detail
    const [isCollapsed, setCollapsed] = useState(true);
    const animation = useState(new Animated.Value(0))[0];

    const toggleCollapse = () => {
        const toValue = isCollapsed ? 1 : 0;

        Animated.timing(animation, {
            toValue,
            duration: 300,
            useNativeDriver: false,
        }).start();

        setCollapsed(!isCollapsed);
    };

    const contentHeight = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, responsiveHeight(40)], // Adjust the height as per your requirement
    });

    return (
        <View style={{ marginVertical: 5, paddingHorizontal: responsiveWidth(3) }}>
            <TouchableWithoutFeedback onPress={toggleCollapse}>
                <View >
                    <View style={{ paddingHorizontal: responsiveWidth(4) }}>
                        <Text style={{ color: '#6465FF', fontWeight: '700' }}>{Title}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 5, width: '100%', justifyContent: 'space-between' }}>
                            <Text style={{ color: Sub_title == 'Exited' ? '#FBE406' : '#A1A1A7' }}>{Sub_title}</Text>
                            <Text style={{ color: Sub_total < 0 ? 'red' : 'green',fontWeight:'600' }}><Text style={{ color: '#000' }}>₹</Text> {parseInt(Sub_total)}  {'('}{Math.abs(Sub_total % 100)}{' % )'}</Text>
                        </View>
                    </View>

                </View>
            </TouchableWithoutFeedback>

            <Animated.View style={{ height: contentHeight, overflow: 'hidden', }}>
                <View style={{ padding: responsiveWidth(4) }}>
                    <View style={styles.placeholderContainer}>
                        <Text style={styles.placeholderTxt}>QTY:</Text>
                        <Text style={styles.placeholderTxt}>LTP:</Text>
                        <Text style={styles.placeholderTxt}>Val:</Text>
                        <Text style={styles.placeholderTxt}>PNL:</Text>
                    </View>

                    {TradeValues?.map((data, index) => {

                        return (

                            <TradetronChanged key={index} index={index} item={data} />
                        )
                    })}
                </View>
            </Animated.View>
            <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 10, width: '92%', alignSelf: 'center' }} />
        </View>
    );
};

const styles = StyleSheet.create({
    placeholderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    placeholderTxt: {
        color: '#000',
        fontWeight: '700'
    }
})

export default CollapsibleView;