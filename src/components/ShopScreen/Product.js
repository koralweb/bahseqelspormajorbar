import {StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Counter from './Counter';
import {observer} from 'mobx-react-lite';
import products from '../../mobx/products';
import { height } from '@fortawesome/free-solid-svg-icons/faShoppingCart';

const Product = ({pr}) => {
  const [cnt, setCnt] = useState(pr.count);
  const [added, setAdded] = useState(pr.added)

  const addProduct = () => {
    products.addProduct(pr.id, cnt);
    setAdded(true)
  };

  return (
    <View style={styles.item}>
      <View>
      <Image source={pr.image} style={styles.image} />
      </View>

      <View style={styles.wrp}>
        {added ? <>
            <View style={styles.btn}>
              <Text style={styles.add}>Added</Text>
            </View>
          </>
          :
          <>
              <Counter cnt={cnt} setCnt={setCnt} style={styles.cnt}/>
              <TouchableOpacity style={styles.btn} onPress={addProduct}>
                <Text style={styles.add}>Add</Text>
              </TouchableOpacity>
          </>}

      </View>

      <Text style={styles.title}>
        {Math.round(pr.price/50)}€ - {pr.title}
      </Text>
      <Text style={styles.desc}>{pr.desc}</Text>
    </View>
  );

};

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 2,
    borderColor: '#008eaf',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: Dimensions.get('window').width,
    paddingTop: 20,
    paddingLeft: 10,
  },
  title:{
    padding: 5,
    fontSize: 25,
    fontWeight: 500,
  },
  wrp: {
    marginLeft: 5,
  },

  btn: {
    borderWidth: 1,
    backgroundColor: '#008eaf',
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
  desc: {
    fontSize: 15,
    fontWeight: 400,
    paddingBottom: 15,

  },
});

export default observer(Product);
