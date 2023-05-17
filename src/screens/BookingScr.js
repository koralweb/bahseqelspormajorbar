import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import MenuBtn from '../components/MenuBtn';
import Menu from '../components/Menu';

const BookingScr = ({navigation}) => {
  const [persons, setPersons] = useState('');
  const [outside, setOutside] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  return (
    <View style={styles.cont}>
      <Header navigation={navigation} />

      <View style={styles.cont}>
        <Text>Бронирование столика</Text>
        <Text>
          Хотите забронировать стол? Отправьте заявку на бронирование в нашем
          кафе. И мы обязательно вам позвоним!
        </Text>
        <Text style={styles.label}>Количество персон</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPersons}
          value={persons}
          placeholder="Количество персон"
          keyboardType="numeric"
        />
        <Text style={styles.label}>Расположение стола</Text>
        <TextInput
          style={styles.input}
          onChangeText={setOutside}
          value={outside}
          placeholder="В помещении или на улице?"
        />
        <Text style={styles.label}>Номер телефона</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPhone}
          value={phone}
          placeholder="Номер телефона"
        />
        <Text style={styles.label}>Дата и время</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDate}
          value={date}
          placeholder="Дата и время"
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.push('Checkout')}>
          <Text style={styles.button}>Оформить</Text>
        </TouchableOpacity>
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

  input: {
    borderWidth: 1,
    borderColor: '#909090',
    marginTop: 5,
  },
  btn: {
    borderWidth: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default BookingScr;
