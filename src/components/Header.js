import {StyleSheet, TouchableOpacity, View, Platform} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import products from '../mobx/products';
import {observer} from 'mobx-react-lite';

const Header = ({navigation}) => {
  return (
    <View style={styles.cont}>
      {products.list.some(el => el.added) && (
        <TouchableOpacity
          style={styles.cartBtn}
          onPress={() => navigation.push('Cart')}>
          <FontAwesomeIcon icon={'shopping-cart'} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: 'grey',
    paddingTop: Platform.OS === 'ios' ? 35 : 10,
    paddingBottom: 10,
    minHeight: 70,
  },
  cartBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});

export default observer(Header);
