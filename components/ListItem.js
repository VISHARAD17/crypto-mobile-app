import React from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';

const ListItem = ({name, symbol, currentPrice, priceChangePercentage7d, logoURL}) => {
    
    const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';
    
    return ( 
    <TouchableOpacity>
        <View style = {styles.itemWrapper}>
            {/* Left Side */}
            <View style = {styles.leftWrapper}>
                <Image 
                    source = {{uri: logoURL}}
                    style = {styles.image}/>
                <View style = {styles.titleWrapper}>
                    <Text style = {styles.title}> {name} </Text>
                    <Text style = {styles.substitle}> {symbol.toUpperCase()} </Text>
                </View>
            </View>

            {/* Right Side */}
            <View style = {styles.rightWrapper}>
                <Text style = {styles.title}> 
                    $ {currentPrice.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                </Text>
                {/* .tofixed is to reduce the decimal upto 2 numbers only */}
                <Text style = {[styles.subtitle, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)} %</Text>
            </View>
        </View>
    </TouchableOpacity> );
}

const styles = StyleSheet.create({
    itemWrapper: {
        // backgroundColor:'yellow',
        paddingHorizontal: 16,
        marginTop: 24, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleWrapper:{
        marginLeft: 8,
    },
    title:{
        fontSize: 18
    },
    subtitle:{
        fontSize: 14,
        color: 'A9ABB1'
    },  
    leftWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#f2f2'
    },  
    image: {
        height: 48,
        width: 48,
    },
    rightWrapper:{
        alignItems:'flex-end'
        // backgroundColor:'#f2f2'
    },
});
 
export default ListItem;