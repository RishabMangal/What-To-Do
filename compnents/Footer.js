import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from "./styles";

class Footer extends Component {
    static navigationOptions= {
        header:null
      }
  render() {
    return (
      <View style={[styles.container,styles.bgDark]}>
        <Text style={[styles.textCenter,styles.m1,styles.p5]}>Thanks for Visiting </Text>
        <Text style={[styles.textRight,styles.m1,styles.p2]}>Developed By </Text>
        <Text style={[styles.textBold,styles.textRight,styles.textPrimary,styles.m1,styles.p2]}>Rishab Mangal </Text>
      </View>
    );
  }
}

export default Footer;
