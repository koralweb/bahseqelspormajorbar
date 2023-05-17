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
  },
});

export default HomeScr;
