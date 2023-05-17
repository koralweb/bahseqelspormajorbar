import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Counter from './Counter';
import {observer} from 'mobx-react-lite';
import products from '../../mobx/products';

const Product = ({pr}) => {
  const [cnt, setCnt] = useState(pr.count);

  const addProduct = () => {
    products.addProduct(pr.id, cnt);
  };

  return (
    <View style={styles.item}>
      <Text>
        {pr.price}€ - {pr.title}
      </Text>
      <Image source={pr.image} style={styles.image} />
      <Text>{pr.desc}</Text>
      <Counter cnt={cnt} setCnt={setCnt} />
      <TouchableOpacity style={styles.btn} onPress={addProduct}>
        <Text style={styles.add}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: 'grey',
  },
  btn: {
    borderWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default observer(Product);
