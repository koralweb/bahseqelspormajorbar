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

      <Text style={styles.title}>Kişiler</Text>
      <View style={styles.card}>
        <Text style={styles.item}>Adres</Text>
        <Text style={styles.desc}>Büyükesat Mah, Uğur Mumcu Cd. 82/A, 06700 Çankaya/Ankara</Text>

      </View>
      <View style={styles.card}>
        <Text style={styles.item}>Telefon</Text>
        <Text style={styles.desc}>+90 312 437 13 32</Text>

      </View>
      <View style={styles.card}>
        <Text style={styles.item}>Açılış saatleri</Text>
        <Text style={styles.desc}>00.00-24.00</Text>

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
    backgroundColor: '#008eaf',
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 500,
color:'#fff'

  },
  card: {
    margin: 10,
    borderWidth: 1,
borderColor:'#008eaf'
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
