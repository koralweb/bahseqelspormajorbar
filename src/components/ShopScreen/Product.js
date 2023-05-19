import {StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Counter from './Counter';
import {observer} from 'mobx-react-lite';
import products from '../../mobx/products';
import { height } from '@fortawesome/free-solid-svg-icons/faShoppingCart';

const Product = ({pr}) => {
  const [cnt, setCnt] = useState(pr.count);

  const addProduct = () => {
    products.addProduct(pr.id, cnt);
  };

  return (
    <View style={styles.item}>
      <View>
      <Image source={pr.image} style={styles.image} />
      <Text style={styles.title}>
        {pr.price}€ - {pr.title}
      </Text>
      <Text>{pr.desc}</Text>

      </View>
      
      <View style={styles.wrp}>
      <Counter cnt={cnt} setCnt={setCnt} style={styles.cnt}/>
      <TouchableOpacity style={styles.btn} onPress={addProduct}>
        <Text style={styles.add}>Add</Text>
      </TouchableOpacity>

      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: "row",
    width: Dimensions.get('window').width,
   
    
  },
  title:{
    fontSize: 25,
    fontWeight: 500,
    
  },
  wrp: {
    marginLeft: 5,

  },
  btn: {
    borderWidth: 1,
    backgroundColor: 'grey',
    width: 125,
    height: 50,
    marginTop: 20,

  
    
  },
  cnt: {
    borderWidth: 2,
    
  },
  add: {
    padding: 10,
    alignSelf: `center`,
    color: 'white',
    fontSize: 20,
    fontWeight: 600,
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default observer(Product);
