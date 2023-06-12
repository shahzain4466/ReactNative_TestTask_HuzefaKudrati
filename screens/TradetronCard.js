import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
var val = 0
export default function TradetronCard({ Detail }) {
  const [total, setTotal] = useState(0)


  useEffect(() => {

    let val = 0
    Detail.map((data) => {
      val = val + parseFloat(data.Sub_total)
    });
    setTotal(parseInt(val))

  }, [Detail])
  return (
    <View style={{ margin: responsiveWidth(5) }}>
      <View style={styles.container}>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTxt}>Summary</Text>
          <View style={styles.expiryContainer}>
            <Text style={styles.expTxt}>Expiry</Text>
            <Image style={{resizeMode:'contain',width:15,height:15}} source={require('../assets/arrow.png')}/>
          </View>
        </View>
        <View style={styles.pnlContainer}>
          <View style={styles.pnlSubConatiner}>
            <Text style={styles.pnlHeading}>Capital:</Text>
            <Text style={styles.pnlValue}>₹535</Text>
          </View>
          <View style={styles.pnlSubConatiner}>
            <Text style={styles.pnlHeading}>P&L:</Text>
            <Text style={styles.pnlValue}>₹{total} {'('}{parseFloat(total / 100).toFixed(5)}{' % )'}</Text>
          </View>
          <View style={styles.pnlSubConatiner}>
            <Text style={styles.pnlHeading}>Value:</Text>
            <Text style={styles.pnlValue}>₹64</Text>
          </View>
        </View>

      </View>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    height: responsiveHeight(24),
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#6465FF'
  },
  summaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  summaryTxt: {
    fontSize: responsiveFontSize(3),
    fontWeight: '700',
    color: '#fff'
  },
  expTxt: {
    color: '#fff',
    fontSize: responsiveFontSize(1.5)
  },
  expiryContainer: {
    borderWidth: 0.4,
    borderColor: '#fff',
    justifyContent: 'space-around',
    borderRadius: 6,
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    paddingHorizontal: responsiveWidth(2),
    height: responsiveHeight(5),
    width: responsiveWidth(30)
  },
  pnlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pnlSubConatiner: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  pnlHeading: {
    color: '#fff',
    fontWeight: '700',
    fontSize: responsiveFontSize(2)
  },
  pnlValue: {
    color: '#fff',
    marginTop: 5
  }
})