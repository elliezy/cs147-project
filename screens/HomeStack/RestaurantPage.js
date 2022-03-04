import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useEffect } from "react";

import InstaStory from "../../react-native-insta-story/index";


const RestaurantPage = ({ navigation, route }) => {
  const params = route.params
  useEffect(() => {
    navigation.setOptions({ headerTitle: params.name, });
  })
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>{params.category}</Text>
        <View style={styles.bottomHeaderView}>
          <Text style={styles.text}>{params.distance} miles away</Text>
          <View style={styles.yelpView}>
            <Image source={require("../../assets/yelp.png")} style={styles.yelpIcon}/>
            <Text style={styles.yelpBoldText}>{params.yelp}</Text>
            <Text style={styles.yelpText}> / 5 </Text>
          </View>
        </View>
      </View>
      <View style={styles.walkthroughView}>
        <View style={styles.restaurantInfoView}>
          <Text style={styles.restaurantInfoText}>MORE INFORMATION</Text>
        </View>
        <Text style={styles.sectionText}>WALKTHROUGH</Text>

        

        <View style={styles.flatlistView}>
          <InstaStory data={params.walkthrough}
              duration={10}
              // onStart={item => console.log(item)}
              // onClose={item => console.log('close: ', item)}
              // customSwipeUpComponent={<View></View>}
              style={{marginTop: "2%"}}/>
        </View>

        
      </View>
      <View style={styles.menuView}>
        <Text style={styles.sectionText}>MENU</Text>
      </View>
    </SafeAreaView>
  );
};


export default RestaurantPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  text: {
    color: "black",
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 1,
    // fontFamily: "Avenir",
  },
  header: {
    backgroundColor: '#f8b432',
    flex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: "100%",
    paddingLeft: "14%",
    paddingRight: "10%",
    paddingTop: "1%",
  },
  bottomHeaderView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  yelpView: {
    display: "flex",
    flexDirection: "row",
  },
  yelpIcon: {
      width: 20,
      height: 20,
      marginRight: 5,
      // marginTop: 4,
  },
  yelpBoldText: {
      color: "#c41200",
      textAlign: 'left',
      fontSize: 16,
      fontWeight: "bold",
  },
  yelpText: {
      color: "#c41200",
      textAlign: 'left',
      fontSize: 16,
  },
  walkthroughView: {
    flex: 4,
    // backgroundColor: "green",
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: "3%",
    marginBottom: "4%",
  },
  flatlistView: {
    flex: 8,
    // paddingLeft: "5%",
    // backgroundColor: "gray",
    // paddingRight: "5%",
  },
  restaurantInfoView: {
    flex: 2,
    backgroundColor: "#F1EBEA",
    justifyContent: "center",
    width: "100%",
    borderRadius: 10,
    marginBottom: "3%"
  },
  restaurantInfoText: {
    color: "black",
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "bold",
  },
  menuView: {
    flex: 8,
    // backgroundColor: "purple",
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  sectionText: {
    color: "black",
    textAlign: 'left',
    fontSize: 26,
    // marginBottom: 1,
    fontWeight: "bold",
  }

});
