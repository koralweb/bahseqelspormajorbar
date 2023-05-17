import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Counter from '../ShopScreen/Counter';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import prod from '../../mobx/products';

const CartProduct = ({pr}) => {
  const [cnt, setCnt] = useState(pr.count);
  return (
    <View style={styles.item}>
      <Image source={pr.image} style={styles.img} />
      <Text>
        {pr.price}€ - {pr.title}
      </Text>
      <Counter cnt={cnt} setCnt={setCnt} />
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => prod.removeProduct(pr.id)}>
        <FontAwesomeIcon icon="close" color="#F94332" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderWidth: 1,
    marginHorizontal: 10,
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  closeBtn: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
});

export default CartProduct;
