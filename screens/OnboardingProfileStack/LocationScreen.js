import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LocationScreen = ({ setFinishedOnboarding }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
		  <Ionicons name='arrow-back-outline' size={30} color='black' />
		</Pressable>
      </View>

      <View style={styles.header}>
      	<Ionicons name='location-outline' size={50} style={styles.icon} />
	    <Text style={styles.title}>Set Your Location!</Text>
	    <Text style={styles.subtitle}>noms simplifies dining options in your area</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.bodyText}>Your current location will be used to locate establishments near you.</Text>
        <Button 
          title="OK, I UNDERSTAND" 
          buttonStyle={styles.button} 
          titleStyle={styles.buttonTitle} 
          containerStyle={styles.buttonContainer} 
          onPress={() => setFinishedOnboarding(true)}
        />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.bottomText}>You can adjust your location settings at any time.</Text>
      </View>

    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: "stretch",
    justifyContent: "center",
    paddingVertical: '20%',
    paddingHorizontal: '12%',
    backgroundColor: '#f8b432',
  },

  top: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 60,
  },

  header: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: '10%',
  },
  icon: {
  	color: 'black',
  	paddingBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
  },

  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: '6%',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 25,    
    height: 45,   
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold', 
    color: 'black',
  },
  buttonContainer: {
    width: '80%',
    marginHorizontal: 50,
    marginVertical: 10,
  },
  bodyText: {
  	fontSize: 16,
  	fontWeight: '300',
  	textAlign: 'center',
  	paddingBottom: 12,
  },

  bottom: {
    height: 50, 
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: '6%',
  },
  bottomText: {
  	fontSize: 14,
  	fontWeight: '300',
  	textAlign: 'center',
  	fontStyle: 'italic',
  },
});
