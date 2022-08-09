import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView
  } from 'react-native';
import BottomSheet from 'react-native-bottomsheet-reanimated';

import ListItem from './components/ListItem';
import { SAMPLE_DATA } from './assets/data/sampleData';
// import { StretchyScrollView } from 'react-native-stretchy';

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
  return (
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
            />
          )}
          ListHeaderComponent = {<ListHeader/>}
        />
      </SafeAreaView>
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
  }
});
