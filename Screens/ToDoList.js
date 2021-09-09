import React from "react";
import {StyleSheet, Text, View,FlatList, TouchableOpacity} from "react-native";
import Colors from "../constants/Colors.js";
//import Icon from 'react-native-vector-icons/FontAwesome';

export default () => {
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