import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Counter from '../ShopScreen/Counter';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import prod from '../../mobx/products';

const CartProduct = ({pr}) => {
  const [cnt, setCnt] = useState(pr.count);
  return (
    <View style={styles.item}>
      <View>
      <Image source={pr.image} style={styles.img} />

      </View>


      <View>

      <Counter style={styles.cnt} cnt={cnt} setCnt={setCnt} />
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => prod.removeProduct(pr.id)}>
        <FontAwesomeIcon icon="close" color="#F94332" size={30} />
      </TouchableOpacity>

      </View>
      <Text style={styles.title}>
        {Math.round(pr.price/50)}€ - {pr.title}
      </Text>


    </View>

  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    paddingTop: 5,
    color: 'black',

  },
  closeBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008eaf',
    width: 125,
    height: 40,
  },
  cnt: {
    alignItems: 'center',
    marginBottom: 20,

  },
});

export default CartProduct;
