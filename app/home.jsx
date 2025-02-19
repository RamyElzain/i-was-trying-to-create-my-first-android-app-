import React from 'react';
import { ScrollView, TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={require('../assets/images/image1.png')} 
        style={styles.image} 
      />
      <Text style={styles.text}>Make Life Easier</Text>
      <Text style={styles.text1}>We offer the best services that helps maintain your home and workplace</Text>
      <TouchableOpacity style={styles.BUtton}>
        <View><Text style={styles.text3}></Text></View>
        <View style={styles.button12}> <Link href="/index.jsx" style={styles.button1}>Continue</Link>  </View>
      </TouchableOpacity>
      <View style={styles.verticalLine1}></View>
      <View style={styles.verticalLine2}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    width: 310,
    height: 360,
    marginTop: 80,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#304059',
    marginTop: 20,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'thin',
    color: '#304059',
    marginTop: 10,
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 50,
    marginRight: 50,
  },
  BUtton: {
    width: 150,
    height: 50,
    backgroundColor: '#3CC8C7',
    marginTop: 100,
    marginLeft: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text3: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  verticalLine1: {
    marginTop: 20,
    marginLeft: '45%',
    width: '40%',
    height: 2,
    backgroundColor: '#D5FFF3',
  },
  verticalLine2: {
    marginTop: -1,
    marginRight: '44%',
    width: '40%',
    height: 2,
    backgroundColor: '#008E8F',
  },
  button1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
  },
  button12: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Home;
