import React from "react";
import {StyleSheet, Text, View,FlatList, TouchableOpacity} from "react-native";
import Colors from "../constants/Colors.js";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Icon from 'react-native-vector-icons/FontAwesome';

const ListButton = ({title, color, navigation}) => {
    return(
        <TouchableOpacity onPress={() => {navigation.navigate("List")}} style={[styles.itemContainer, { backgroundColor:color}]}>
        <View><Text style={styles.itemTitle}>{title}</Text></View>
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={() => {}}>
                {/* <Icon name="option-outline" size={30} color="white" /> */}
             </TouchableOpacity>
             <TouchableOpacity onPress={() => {}}>
                {/* <Icon name="trash-outline" size={30} color="white" /> */}
             </TouchableOpacity>
         </View>
     </TouchableOpacity>
    )
}
export default ({navigation}) => {
    return(
    <View style={styles.container}>
        {/* <ListButton title="School"/>
        <ListButton title="Personal"/>
        <ListButton title="Work"/> */}
        <FlatList data={[
        {title:"School", color:Colors.aquamarine},
        {title:"Personal", color:Colors.aliceblue},
        {title:"Work", color:Colors.red}]}
        renderItem={({item: {title,color}, index}) => {
            return(
                <ListButton title={title} color={color} navigation={navigation} />

            )

        }}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    itemsTitle: {
      fontSize: 24,
      padding: 5, 
      color: '#8a2be2',
    },
   itemContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 100,
      flex: 1,
      borderRadius: 20,
      marginHorizontal: 20,
      marginVertical: 10,
      padding: 15,
      
    },
    icon:{
     padding: 5,
     fontSize: 24,
      
    },
    centeredView:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    }
  });
  