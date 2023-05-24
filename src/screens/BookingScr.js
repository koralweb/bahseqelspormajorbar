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
import products from '../mobx/products'

const BookingScr = ({navigation, route}) => {
  console.log(route);
  const [persons, setPersons] = useState('');
  const [outside, setOutside] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const order = () => {
    if(route.params) products.clearCart()
    navigation.push('Checkout')
  }

  return (
    <View style={styles.cont}>
      <Header navigation={navigation} />

      <View style={styles.cont}>
        {route.params ? <>
            <Text style={styles.title}>Çıkış yapmak</Text>
            <Text style={styles.desc}>
              Siparişinizi verin, sizi arayalım!
            </Text>
          </>
          : <>
          <Text style={styles.title}>Masa rezervasyonu</Text>
          <Text style={styles.desc}>
            Bir masa ayırtmak ister misiniz? Rezervasyon talebinizi bize iletin
            kafe. Ve kesinlikle sizi arayacağız!
          </Text>
            <Text style={styles.label}>Masa düzenlemesi</Text>
            <TextInput
              style={styles.input}
              onChangeText={setOutside}
              value={outside}
              placeholder="İçeride mi yoksa dışarıda mı?"
            />
        </>}
        <Text style={styles.label}>Kişi Numarası</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPersons}
          value={persons}
          placeholder="Kişi Numarası"
          keyboardType="numeric"
        />
        <Text style={styles.label}>Telefon numarası</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPhone}
          value={phone}
          placeholder="Telefon numarası"
        />
        <Text style={styles.label}>Tarih ve saat</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDate}
          value={date}
          placeholder="Tarih ve saat"
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={order}>
          <Text style={styles.button}>Tasarım</Text>
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
  title: {
    fontSize: 25,
    fontWeight: 500,
    color: 'black',
    alignSelf: `center`,
    padding: 10,
  },
  desc: {
    alignSelf: `center`,
    paddingBottom: 10,
  },
  label: {
    color: 'black',
    fontSize: 15,
    marginTop: 10,
    marginLeft: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#909090',
    marginTop: 5,
    width: 360,
    height: 50,
    paddingLeft: 80,
    borderRadius: 10,
    alignSelf: `center`,
  },
  btn: {
    borderWidth: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    width: 270,
    height: 50,
    backgroundColor: '#008eaf',
  },
  button: {
    alignSelf: `center`,
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 800,
    color:'#fff'
  },
});

export default BookingScr;
