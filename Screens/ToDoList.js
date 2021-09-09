import React from "react";
import {StyleSheet, Text, View,FlatList, TouchableOpacity} from "react-native";
import Colors from "../constants/Colors.js";
//import Icon from 'react-native-vector-icons/FontAwesome';

export default ({route, navigation}) => {
    const {title, color} = route.params;
    return(
        <View style={styles.container}></View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    icon:{
        padding: 5,
        fontSize: 24,
         
       },
});