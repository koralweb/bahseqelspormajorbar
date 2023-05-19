import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import MenuBtn from '../components/MenuBtn';
import Menu from '../components/Menu';

function HomeScr({navigation}) {
  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={() => navigation.push('Market')}>
        <Text style={styles.text}>Продукты</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Booking')}>
        <Text style={styles.text}>Бронирование</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Broadcasts')}>
        <Text style={styles.text}>Трансляции</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Contacts')}>
        <Text style={styles.text}>Контакты</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Cart')}>
        <Text style={styles.text}>Корзина</Text>
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
    backgroundColor: 'grey',

  },
  text: {
    fontSize: 25,
    fontWeight: 500,
    borderWidth: 2,
    paddingLeft: 30,
    paddingTop: 8,
    width: 255,
    height: 50,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: 'white',
    color: 'white',
    backgroundColor: 'grey',
    
    
  },
});

export default HomeScr;
