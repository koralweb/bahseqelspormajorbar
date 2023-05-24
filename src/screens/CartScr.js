import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import products from '../mobx/products';
import CartProduct from '../components/CartScreen/CartProduct';
import {observer} from 'mobx-react-lite';
import MenuBtn from '../components/MenuBtn';
import Menu from '../components/Menu';

const CartScr = ({navigation}) => {
  const renderProduct = () => {
    return products.list
      .filter(p => p.added)
      .map(pr => <CartProduct pr={pr} key={pr.id} />);
  };

  const renderBtn = () => {
    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.push('Booking', {cart: true})}>
        <Text style={styles.button}>Оформить</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.cont}>
      <Header navigation={navigation} />
      <Text style={styles.title}>Корзина</Text>
      {products.list.filter(p => p.added).length ? (
        <ScrollView >
          {renderProduct()}
          {renderBtn()}
        </ScrollView>
      ) : (
        <Text style={styles.text}>В корзине нет товаров</Text>
      )}
      <MenuBtn />
      <Menu navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  button: {
    borderWidth: 1,
    marginTop: 30,
    backgroundColor: 'grey',
    alignSelf: `center`,
    fontSize: 20,
    paddingLeft: 100,
    color: "black",
    paddingTop: 5,
    width: 300,
    height: 40,
    
  },
  title: {
    fontSize: 25,
    fontWeight: 500,
    color: 'black',
    alignSelf: `center`,
    padding: 10,

  },
  text: {
    fontSize: 20,
    fontWeight: 600,

  },
  
 
});

export default observer(CartScr);
