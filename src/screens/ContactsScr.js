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
      <View style={styles.card}>
        <Text style={styles.item}>Адрес</Text>
        <Text style={styles.desc}>Москва, ул Осиновая 2</Text>

      </View>
      <View style={styles.card}>
        <Text style={styles.item}>Телефон</Text>
        <Text style={styles.desc}>+7888888888</Text>

      </View>
      <View style={styles.card}>
        <Text style={styles.item}>Часы работы</Text>
        <Text style={styles.desc}>09.00-21.00</Text>

      </View>
      <MenuBtn />
      <Menu navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 500,
    color: 'black',
    alignSelf: `center`,
    padding: 10,
  },
  item: {
    backgroundColor: '#909090',
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 500,


  },
  card: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,

  },
  desc: {
    alignSelf: `center`,
    fontSize: 20,
    fontWeight: 700,
    color: 'black',
    paddingTop: 40,
    paddingBottom: 40,



  },
});

export default ContactsScr;
