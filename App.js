// the below import is necessary to
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView
  } from 'react-native';
  import {
    BottomSheetModal,
    BottomSheetModalProvider,
  } from '@gorhom/bottom-sheet';
import ListItem from './components/ListItem';
import { SAMPLE_DATA } from './assets/data/sampleData';

const ListHeader = () => {
  return(
    <>
      <View style = {styles.titleWraper}>
        <Text style = {styles.largeTitle}>Crypto</Text>
      </View>
      <View style = {styles.divider} />
  </>
  )
}

export default function App() {

  // ref
  const bottomSheetModalRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  const openModal = () => {
    bottomSheetModalRef.current.present();
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <SafeAreaView style = {styles.container}>
          <FlatList
            keyExtractor={(item) => item.id}
            data = {SAMPLE_DATA}
            renderItem = {({item}) => (
              <ListItem 
                name = {item.name}
                symbol = {item.symbol}
                currentPrice = {item.current_price}
                priceChangePercentage7d = {item.price_change_percentage_7d_in_currency}
                logoURL = {item.image}
                onPress = {() => openModal()}
              />
            )}
            ListHeaderComponent = {<ListHeader/>}
          />
        </SafeAreaView>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            style = {styles.bottomSheet}
          >
            <View style={styles.contentContainer}>
              <Text>bottomsheet</Text>
            </View>
          </BottomSheetModal>
        
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

// registerRootComponent(App);

const styles = StyleSheet.create({
  divider: {
    height: StyleSheet.hairlineWidth,
    // color: '#A9ABB1',
    backgroundColor: '#A9ABB1',
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 16,
  },  
  titleWraper: {
    marginTop: 80,
    paddingHorizontal:16
  },
  container: {
    backgroundColor: '#fff'
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    // color: '#fff',
  },
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
