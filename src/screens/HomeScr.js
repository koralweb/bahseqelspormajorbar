import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MenuBtn from '../components/MenuBtn';
import Menu from '../components/Menu';


function HomeScr({navigation}) {
  return (
    <View style={styles.cont}>
      <Image source={require('../assets/icon.png')} style={styles.icon} />
      <TouchableOpacity
        onPress={() => navigation.push('Market')}
        style={styles.item}>
        <Text style={styles.text}>Ürünler</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.push('Booking')}
        style={styles.item}>
        <Text style={styles.text}>Rezervasyon</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.push('Broadcasts')}
        style={styles.item}>
        <Text style={styles.text}>Yayınlar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.push('Contacts')}
        style={styles.item}>
        <Text style={styles.text}>Kişiler</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.push('Cart')}
        style={styles.item}>
        <Text style={styles.text}>Araba</Text>
      </TouchableOpacity>
      <MenuBtn />
      <Menu navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008eaf',
  },
  text: {
    fontSize: 25,
    fontWeight: 500,
    paddingLeft: 30,
    paddingTop: 8,
    width: 255,
    height: 50,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: 'white',
    color: 'white',
  },
  icon: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#008eaf',
  },
});

export default HomeScr;
