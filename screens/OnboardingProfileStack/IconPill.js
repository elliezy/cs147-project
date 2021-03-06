import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from 'react-native-elements';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';

const IconPill = ({ itemName, iconName }) => {
  const [pressed, setPressed] = React.useState(false);
  const parsedIcon = parseIconFromClassName('fa-solid fa-leaf');

  return (
    <View style={styles.container}>
      <Button 
        title={itemName}
        buttonStyle={pressed ? styles.buttonPressed : styles.button} 
        titleStyle={pressed ? styles.textPressed : styles.text} 
        containerStyle={styles.buttonContainer} 
        onPress={() => setPressed(!pressed)}
      />
    </View>
  );
};

export default IconPill;

const styles = StyleSheet.create({
  container: {
  },

  button: {
    backgroundColor: 'white',
    borderColor: 'grey',  
    borderWidth: 2, 
    borderRadius: 50,  
  },
  buttonPressed: {
    backgroundColor: '#f8b432',
    borderColor: '#f8b432',  
    borderWidth: 2, 
    borderRadius: 50,  
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'grey',
    padding: '2%',
  },
  textPressed: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    padding: '2%',
  },
  buttonContainer: {
    padding: '5%',
  },

});