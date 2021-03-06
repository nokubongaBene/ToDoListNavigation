import React from "react";
import {StyleSheet,ImageBackground, Text, View,FlatList,useLayoutEffect, TouchableOpacity, Image} from "react-native";
import Colors from "../constants/Colors.js";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import trash from "../images/trash.png";
import options from "../images/options.jpg";

//import Icon from 'react-native-vector-icons/FontAwesome';
const image = {uri: "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjujLAFC5_qfMhQOCCFx5PpaGQ5ZsO9RgS8Q&usqp=CAU"};

const ListButton = ({title, color, navigation, onDelete}) => {
    return(

        <TouchableOpacity onPress={() => navigation.navigate("List", {title:title,color:color})}
             style={[styles.itemContainer, { backgroundColor:color}]}>
        <View><Text style={styles.itemTitle}>{title}</Text></View>
        
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={() => {}}>
                <Image style={{height: 30, width:30, borderRadius:15,}} source={options} />
             </TouchableOpacity>
             <TouchableOpacity onPress={onDelete}>
             <Image style={{height: 30, width:30, borderRadius:15,}} source={trash} />
             </TouchableOpacity>
         </View>
     </TouchableOpacity>
    )
}

const renderAddListIcon = ({addItemToLists}) => {
    return(
        <TouchableOpacity onPress={() => addItemToLists({title:"title", color: Colors.aquamarine})}>
            <Text style={styles.icon}>+</Text>
            </TouchableOpacity>
    )
}
export default ({navigation}) => {
    const lists = 
        [
            {title:"School", color:Colors.cadetblue},
            {title:"Personal", color:Colors.cadetblue},
            {title:"Work", color:Colors.cadetblue}]
    // const addItemToLists (parameter)= item: any
    //     lists.push(item); 

    const removeItem = (index) => {
        lists.splice(index, 1);
        setLists([...lists]);
    }
    return(
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {/* <ListButton title="School"/>
        <ListButton title="Personal"/>
        <ListButton title="Work"/> */}
        <FlatList data={lists}
        renderItem={({item: {title,color}, index}) => {
            return(
                <ListButton title={title} color={color} navigation={navigation}
                onDelete={() => removeItem(index)} />

            )

        }}
        />
        </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.turquoise
    },
    itemTitle: {
      fontSize: 24,
      padding: 5, 
      color: Colors.whitesmoke,
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
      marginTop: 50,
      
    },
    icon:{
     padding: 5,
     fontSize: 24,
      
    },
    centeredView:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
  });
  