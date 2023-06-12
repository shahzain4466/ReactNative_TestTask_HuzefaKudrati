import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, FlatList } from 'react-native';
import TradetronHeader from './TradetronHeader';
import CollapsibleView from './TradetronCollapsableView';
import { updateData } from './Tradetron_data'
import TradetronCard from './TradetronCard';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default function Tradetron({ }) {
  const [toggle, setToggle] = useState(false);
  const [ListDetail, setListDetail] = useState([])
  useEffect(() => {
    const intervalId = setInterval(() => {
      let record = updateData();

      setListDetail(record)
      setToggle(prevToggle => !prevToggle);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      <TradetronHeader />
      <TradetronCard Detail={ListDetail} />

      <FlatList
        ListEmptyComponent={() => {
          return (
            <View style={styles.emptyListStyle}>
              <Text style={{ textAlign: 'center' }}>Loading Data . . . </Text>
            </View>
          )
        }}

        data={ListDetail}

        extraData={toggle}
        keyExtractor={item => item.Title}
        renderItem={({ item }) => (
          <CollapsibleView Detail={item} />
        )}
      />

      
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  emptyListStyle: {
    height: responsiveHeight(30),
    justifyContent: 'center',
    alignItems: 'center'
  }
})