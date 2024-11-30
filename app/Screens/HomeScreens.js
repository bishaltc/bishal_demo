import React, { useState } from 'react';
import { Button } from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/TodoList';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {

  const [tasks, setTasks] = useState([]); 
  
  const addTask = (task) => {
    if (task !== '') { 
      setTasks([...tasks, task]); 
    }
  };

  return (
    <MainLayout>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </MainLayout>
  );
};

export default HomeScreen;
