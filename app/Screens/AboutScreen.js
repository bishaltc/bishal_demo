import React from 'react';
import { View, Text, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <MainLayout>
      <Text>App Name: My ToDo App</Text>
      <Text>Created by:Bishal</Text>
      <Text>Date: {currentDate}</Text>
      <Button
        title="Go back "
        onPress={() => navigation.goBack()}
      />
    </MainLayout>
  );
};

export default AboutScreen;
