import React, { Component } from 'react';
import { View, Text } from 'react-native';
import s, { styles } from "./styles";

class Footer extends Component {
    static navigationOptions= {
        header:null
      }
  render() {
    return (
      <View style={[s.borderTop,s.bgDark]}>
        <Text style={[s.textCenter,s.fontWeightBold,styles.m1,styles.p5]}>Thanks for Visiting </Text>
        <Text style={[s.textRight,s.fontWeightBold,styles.m1,styles.p2]}>Developed By </Text>
        <Text style={[s.textRight,s.fontWeightBold,s.textPrimary,styles.m1,styles.p2]}>Rishab Mangal </Text>
      </View>
    );
  }
}

export default Footer;
