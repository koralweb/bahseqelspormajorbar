import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import globalStyles from '../globalStyles';
import MenuBtn from '../components/MenuBtn';
import Menu from '../components/Menu';

const ContactsScr = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <Header navigation={navigation} />

      <Text style={styles.title}>Контакты</Text>
      <MenuBtn />
      <Menu navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
});

export default ContactsScr;
