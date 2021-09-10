import React, {useState} from 'react';
import { KeyboardAvoidingView,Alert,ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from '../component/Task';
import Colors from "../constants/Colors.js";

const image = { uri: "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjujLAFC5_qfMhQOCCFx5PpaGQ5ZsO9RgS8Q&usqp=CAU" };

export default function App() {
  const [task, setTask]= useState("");
  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = () => {
      if(task !== ""){
        Keyboard.dismiss();
        setTaskItems([...taskItems, task]);
        setTask(null);
      }else{
          Alert.alert("No Task", "Please enter a task.");
      }
    
  }

  const completedList = (index) =>{
    setUpdate(taskItems[index]);
    setVisible(true);
    setIndex(index);

  }
  const handleDelete = (taskIndex) => {
    let itemCopy = [...taskItems];
    itemCopy.splice(taskIndex, 1);
    setTaskItems(itemCopy);
  };
  
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView>
      <View style={styles.tasksWrapper}>
  <Text style={styles.sectionTitle}>List</Text>
  {taskItems.length > 0 ?
      <View style={styles.items}>
        {/*this is where the task will go*/}
        {
          
          taskItems.map((item, index) => {
            return (
            <TouchableOpacity key={index} onPress={() => handleDelete(index)}>
            <Task text={item}/>
            </TouchableOpacity>
            )
           
          })
        }
        {/* <Task text={'Task 1'} />
        <Task text={'Task 2'} /> */}


        </View>
  :
  <View >
  <Text style={styles.addText}>There's Currently No List</Text>
      </View>
  }
      </View>
      </ScrollView>
      
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height" }
      style={styles.writeTaskWrapper}>

      <TextInput style={styles.input} placeholder='Add a Task' value={task} onChangeText={text => setTask(text)}/>

      <TouchableOpacity onPress={() => handleAddTask()} >
      <View style={styles.addWrapper}>
        <Text>+</Text>
        </View>
      </TouchableOpacity>
      
      </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#000000',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
    
  },
  addWrapper:{
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.aliceblue,
    borderWidth: 1
  },
  addText:{
      marginTop: 100,
    fontSize: 30,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
