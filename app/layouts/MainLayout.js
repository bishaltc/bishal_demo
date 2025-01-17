import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../components/footer';



const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  
  
});

export default MainLayout;
